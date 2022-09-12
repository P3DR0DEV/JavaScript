const viewHome = (req, res) =>{
    return res.render('home')
}
const viewAbout = (req, res) =>{
    return res.send('About Page')
}

module.exports ={
    viewHome,
    viewAbout
}