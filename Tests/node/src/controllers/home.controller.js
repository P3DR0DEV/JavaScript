const viewHome = (req, res) =>{
    return res.render('home',{ title: 'Home Page' })
}
const viewAbout = (req, res) =>{
    return res.send('About Page')
}

module.exports ={
    viewHome,
    viewAbout
}