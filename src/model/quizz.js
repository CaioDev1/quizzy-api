const connection = require('./connection')

const questions = require('./questions')

module.exports = {
    quizzExist(id) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT 0 FROM quizz WHERE id = ?
            `, [id], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Nenhum quizz encontrado com esse código.', err})
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
                    reject({status: 500, message: 'Houve um erro ao tentar criar o quizz.', err})
                } else {
                    questions.addQuestions(questionsList, results.insertId).then(() => {
                        resolve(results.insertId)
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
                    reject({status: 404, message: 'Quizz não encontrado.', err})
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
    },

    getQuizzLength(quizzId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT questionNum FROM quizz WHERE id = ?
            `, [quizzId], (err, results) => {
                if(err || !results.length) {
                    reject({status: 404, message: 'Houve um erro ao tentar encontrar o n° de perguntas do quizz.', err})
                } else {
                    resolve(results[0].questionNum)
                }
            })
        })
    }
}