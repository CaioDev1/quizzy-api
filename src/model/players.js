const connection = require('./connection')

const quizz = require('./quizz')

module.exports = {
    addPlayer(username, team, quizzId) {
        return new Promise((resolve, reject) => {
            quizz.quizzExist(quizzId).then(() => {
                connection.query(`
                    INSERT INTO players (username, team, quizzId) VALUES (?, ?, ?) 
                `, [username, team, quizzId], (err, results) => {
                    if(err) {
                        reject({status: 500, message: 'Erro ao tentar adicionar novo jogador.'})
                    } else {
                        resolve(results.insertId)
                    }
                })
            }).catch(err => {
                reject(err)
            })  
        })
    },

    updatePlayerScore(quizzId, playerId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                UPDATE players SET score = score + 200
                WHERE quizzId = ?
                AND id = ?
            `, [quizzId, playerId], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Houve um erro ao tentar atualizar score do jogador.'})
                } else {
                    resolve(200)
                }
            })
        })
    },

    getPlayers(quizzId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT username, score, team FROM players
                WHERE quizzId = ?
                ORDER BY score DESC
            `, [quizzId], (err, results) => {
                if(err || !results.length) {
                    reject({status: 404, message: 'Jogadores do quizz não encontrados.'})
                } else {
                    resolve(results)
                }
            })
        })
    }
}