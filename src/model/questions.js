const connection = require('./connection')

// utils
const questionsUtils = require('../utils/questionsUtils')

module.exports = {
    numOfAlternatives: 4,

    addQuestions(questions, quizzId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                INSERT INTO questions (
                    title,
                    A,
                    B,
                    C,
                    D,
                    correctQuestion, 
                    quizzId
                ) VALUES ${questions.map(item => {
                    return `(
                        "${item.title}", 
                        ${questionsUtils.getQuestionAlternativeContent(item.alternatives)},
                        "${questionsUtils.getCorrectAlternativeMark(item.alternatives)}",
                        ${quizzId}
                    )`
                })}
            `, (err, results) => {
                if(err) {
                    reject({status: 500, message: 'Erro ao tentar adicionar novas questões.'})
                } else {
                    resolve()
                }
            })
        })
    },

    getQuestions(quizzId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT id questionId, title, A, B, C, D
                FROM questions
                WHERE quizzId = ?;
            `, [quizzId], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Questões do quizz não encontradas.'})
                } else { 
                    resolve(questionsUtils.formatQuestions(results))
                }
            })
        })
    },

    verifyQuestionAnswer(questionId) {
        return new Promise((resolve, reject) => {
            connection.query(`
                SELECT correctQuestion FROM questions WHERE id = ?
            `, [questionId], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Houve um erro ao tentar encontrar a questão para a verificação.'})
                } else {
                    resolve(results[0].correctQuestion)
                }
            })
        })
    }
}