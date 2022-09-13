const checkCsrf = (err, req, res, next)=> {
    try{
        if(err && err.code ==='EBADCSRFTOKEN') {
            res.render('/err')
            throw new Error('Bad CSRF token')
        } else{
            next()
        };

    } catch (err) {
        console.log(err)
    }
}


module.exports ={
    checkCsrf,
}