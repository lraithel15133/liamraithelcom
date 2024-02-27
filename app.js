var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var port = process.env.PORT || 3008;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("index", {page: "home"});
});

app.get("/projects", function(req, res){
    res.render("index", {page: "projects"});
});

app.get("/aboutme", function(req, res){
    res.render("index", {page: "aboutme"});
});

app.listen(port, function(){
     console.log("server is running on port" + port);
});