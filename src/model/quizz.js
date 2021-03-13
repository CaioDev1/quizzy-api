const connection = require('./connection')

const questions = require('./questions')

module.exports = {
    quizzExist(id) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT 0 FROM quizz WHERE id = ?
            `, [id], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Nenhum quizz encontrado com esse código.'})
                } else {
                    resolve()
                }
            })
        })
    },

    addQuizz(owner, theme, questionsList) {
        return new Promise((resolve, reject) => {
            connection.query(`
                INSERT INTO quizz (owner, theme, questionNum) VALUES (?, ?, ?)
            `, [owner, theme, questionsList.length], (err, results) => {
                if(err) {
                    reject({status: 500, message: 'Houve um erro ao tentar criar o quizz.'})
                } else {
                    questions.addQuestions(questionsList, results.insertId).then(() => {
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                }
            })
        })
    },

    getQuizz(quizzId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT id quizzId, owner, theme, questionNum
                FROM quizz
                WHERE id = ?
            `, [quizzId, quizzId], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Quizz não encontrado.'})
                } else {
                    questions.getQuestions(quizzId).then(questions => {
                        resolve({
                            ...results[0],
                            questions
                        })
                    }).catch(err => {
                        reject(err)
                    })
                }
            })
        })
    }
}