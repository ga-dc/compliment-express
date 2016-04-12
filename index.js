//add modules
var express = require('express');
var hbs = require('express-handlebars');
var db = require("./db/connection")

var app = express();

//sets up app to render views and use handlebars
app.set('view engine', 'hbs');
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'main-layout'
}));

app.use('/assets', express.static('public'));

app.get('/', function(req, res){
  var compliments = db.compliments
  var rando = Math.floor(Math.random() * 7); 
  res.render('welcome', {
    compliment: db.compliments[rando]
  });
});

app.listen(3001, function(){
  console.log('connected to port:3001');
})
