const Blog = require('../models/blog')

//get methods
const blogIndex = (req, res)=>{
    Blog.find().sort({ createdAt: -1 })
    .then((result)=>{
       res.render('../views/blog/index',{
           title: 'All Blogs',
           blogs: result
       })
    })
    .catch((err)=>{
       console.log(err)
    })
}

const blogDetails = (req, res)=>{
    const id = req.params.id;

    Blog.findById(id)
     .then(result =>{
        res.render('../views/blog/details', {title:'Blog Details', blog: result});
     })
     .catch(err =>{ 
        console.log(err)
        res.render('../views/404', { title: 'Not Found' })
    });
}

const returnCreatePage = (req,res)=>{
    return res.render('../views/blog/create', { title: 'Create New Blog' })
}


// Post Method

const createNewBlog = (req,res)=>{
    const blog = new Blog(req.body);
    
    blog.save()
     .then((result)=>{
        res.redirect('/blogs')
     })
     .catch((err)=>console.log(err))
}

// Delete method
const blogDeleteItem = (req, res)=>{

    const id = req.params.id;

    Blog.findByIdAndDelete(id)
     .then( result =>{
            res.json({ redirect:'/blogs' })
        })
     .catch(err => {
        console.log(err);
        res.render('../views/404', { title: 'Not Found' })
    })
}

module.exports = {
    blogIndex,
    blogDetails,
    blogDeleteItem,
    createNewBlog,
    returnCreatePage
}