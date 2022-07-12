const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = weight/(height*height);
  var msg = "";
  if(result < 16){
    msg = "Attention needed! You are Underweight 😥";
  }else if(result >= 25){
    msg = "Attention needed! You are Overweight 😥";
  }else if(typeof(result) != Number){
    msg = "Invalid input 😏";
  }else{
    msg = "great! You are Normal 🙂";
  }

  res.send(`Your Body Mass Index is ${result.toFixed(1)} \n ${msg}`);
});

// Code above this line
app.use((req, res, start) => {
  res.status(404).send("The page you are looking for does not exists!");
});
app.listen("3000", () => {
  console.log("Server started on port 3000.");
});
