const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    return res.status(error.status).json({
        message: error.message
    })
}

module.exports = errorHandler