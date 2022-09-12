const newMiddleware = (req, res, next) =>{
    console.log('First Middleware')
    next()
}

module.exports={ newMiddleware }