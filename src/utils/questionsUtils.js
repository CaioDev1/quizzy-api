module.exports = {
    getQuestionAlternativeContent(alternatives, numOfAlternatives) {
        let contentArray = []

        for(let i = 0; i < numOfAlternatives; i++) {
            if(alternatives[i]) {
                contentArray.push(`"${alternatives[i].content}"`)
            } else {
                contentArray.push('default')
            }
        }

        return contentArray.join(',')
    },

    getCorrectAlternativeMark(alternatives) {
        let correctMark = ''

        alternatives.forEach(item => {
            if(item.correct) correctMark = item.mark
        })

        return correctMark
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
                alternatives: formatAlternatives(q),
                questionId: q.questionId
            }
        })

        return formated
    }
}