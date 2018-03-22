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

app.get('/add', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  res.send("X + Y = " + (x+y));
});

app.listen(8080);
