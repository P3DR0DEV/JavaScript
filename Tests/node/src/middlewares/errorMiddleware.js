const erros = (req,res,next)=>{
    res.locals.errors = req.flash('errors');
    next()
}

const success = (req, res, next) =>{
    res.locals.success = req.flash('success');
    next()
};

module.exports= { 
    erros,
    success
}