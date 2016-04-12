var express = require("express");
var hbs     = require("express-handlebars");

var app = express();

app.set("view engine", "hbs");
app.engine(".hbs",hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("welcome-compliment");
});

app.get("/compliments", function(req,res){
  res.render("compliments",{
    numCompliments: 5
  })
})


app.listen(3001, function(){
  console.log("It's Aliiiive!");
});
