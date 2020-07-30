const express = require ('express')
const nunjucks = require ('nunjucks')
const data = require('./data')

const server = express ()

server.use(express.static("public"))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express : server
})

server.get("/", function (req, res){
    return res.render("about")
})

server.get("/class", function (req, res){
    return res.render("class", {items:data})
})

server.get("/courses/:id", function (req, res){
    const id = req.params.id;

    return res.render('courses', {items: data} )
})

server.listen(5000, function(){
    console.log("Server is running")
})