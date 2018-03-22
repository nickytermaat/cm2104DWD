var express = require('express')
var app = express();

var knockknock = require('knock-knock-jokes');


app.get('/', function(req, res){
  res.send("Hello World! by express");
});

app.get('/test', function(req, res){
  res.send("This is route 2 /test");
});

app.get('/joke', function(req, res){
  var randomJoke = knockknock();
  res.send(randomJoke);
});

app.get('/calc', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var op = req.query.op;

  if (op == "sub") {
    res.send("X - Y = " + (x-y));
  } else if (op == "add") {
    res.send("X + Y = " + (x+y));
  } else if (op == "mul") {
    res.send("X * Y = " + (x*y));
  } else if (op = "div") {
    res.send("X / Y = " + (x/y));
  } else {
    res.send("Invalid calculation");
  }

});

app.listen(8080);
