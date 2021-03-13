const connection = require('./connection')

module.exports = {
    numOfAlternatives: 4,

    addQuestions(questions, quizzId) {
        return new Promise((resolve, reject) => {
            function getQuestionAlternativeContent(alternatives) {
                let contentArray = []
        
                for(let i = 0; i < this.numOfAlternatives; i++) {
                    if(alternatives[i]) {
                        contentArray.push(`"${alternatives[i].content}"`)
                    } else {
                        contentArray.push('default')
                    }
                }
        
                return contentArray.join(',')
            }
        
            function getCorrectAlternativeMark(alternatives) {
                let correctMark = ''
        
                alternatives.forEach(item => {
                    if(item.correct) correctMark = item.mark
                })
        
                return correctMark
            }

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
                        ${getQuestionAlternativeContent(item.alternatives)},
                        "${getCorrectAlternativeMark(item.alternatives)}",
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
                SELECT title, A, B, C, D
                FROM questions
                WHERE quizzId = ?;
            `, [quizzId], (err, results) => {
                if(err) {
                    reject({status: 404, message: 'Questões do quizz não encontradas.'})
                } else { 
                    resolve(this.formatQuestions(results))
                }
            })
        })
    },

    formatQuestions(questions) {
        function formatAlternatives(q) {
            let alternativesArray = []

            Object.keys(q).forEach(key => {
                let alternative = {}

                if(['A', 'B', 'C', 'D'].indexOf(key) !== -1) {
                    alternative.mark = key
                    alternative.content = q[key]
                    alternative.isCorrect = null

                    q[key] && alternativesArray.push(alternative) // se a alternativa existe (não é null), adiciona
                }
            })

            return alternativesArray
        }

        let formated = questions.map(q => {
            return {
                title: q.title,
                alternatives: formatAlternatives(q)
            }
        })

        return formated
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