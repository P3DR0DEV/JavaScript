const checkCsrf = (err, req, res, next)=> {
    try{
        if(err && err.code ==='EBADCSRFTOKEN') {
            res.redirect('/erro')
            throw new Error('Bad CSRF token')
        } else{
            next()
        };

    } catch (err) {
        console.log(err)
    };
};


const genCSRFToken = (req, res, next)=> {
    res.locals.csrfToken = req.csrfToken()
    next()
};


module.exports ={
    checkCsrf,
    genCSRFToken
}