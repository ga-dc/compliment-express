var express = require("express");
// var express = require("express-handlebars");

var app = express();

app.get("/", function(req, res){
  res.send("Hello, world!");
});

app.listen(3001, function(){
  console.log("It's Aliiiiiive!");
});
