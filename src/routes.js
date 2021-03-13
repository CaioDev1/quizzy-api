const route = require('express').Router()

const quizz = require('./model/quizz')
const players = require('./model/players')
const questions = require('./model/questions')

route.post('/player/add', (req, res, next) => {
    const {username, quizzId, team} = req.body

    players.addPlayer(username, team, quizzId).then(() => {
        res.status(201).json({
            message: 'Player added successfully.'
        })
    }).catch(err => {
        next(err)
    })
})

route.patch('/player/send-answer', (req, res, next) => {
    const {questionId, quizzId, playerId, chosenAlternative} = req.query

    questions.verifyQuestionAnswer(questionId).then(correctAlternative => {
        if(correctAlternative == chosenAlternative) {
            players.updatePlayerScore(quizzId, playerId).then(() => {
                res.status(200).json({
                    message: 'Player score updated successfully.',
                    correctAlternative
                })
            }).catch(err => {
                next(err)
            })
        } else {
            res.status(200).json({
                message: 'Wrong answer.',
                correctAlternative
            })
        }
    }).catch(err => {
        next(err)
    })
})

route.post('/quizz/add', (req, res, next) => {
    const {owner, theme, questions} = req.body

    quizz.addQuizz(owner, theme, questions).then(() => {
        res.status(201).json({
            message: 'Quizz created successfully.'
        })
    }).catch(err => {
        next(err)
    })
})

route.get('/quizz/:quizzId', (req, res, next) => {
    const quizzId = req.params.quizzId

    quizz.getQuizz(quizzId).then(results => {
        res.status(200).json(results)
    }).catch(err => {
        next(err)
    })
})

route.get('/quizz/:quizzId/results', (req, res, next) => {
    const quizzId = req.params.quizzId

    players.getPlayers(quizzId).then(players => {
        res.status(200).json({
            players
        })
    }).catch(err => {
        next(err)
    })
})

module.exports = route