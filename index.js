const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

let compliments = [
  "You look gorgous today",
  "High five = ^5",
  "How did you get so awesome?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



app.get("/:name", (req, res) => {
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];
  let name = req.params.name
  res.render("index", {compliment, color, name})
});

app.post("/:name/new", (req, res) => {
  compliments.push(req.body.newCompliment);
  let name = req.params.name;
  res.redirect(`/${name}`);
})

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
