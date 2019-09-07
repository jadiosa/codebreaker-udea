var express = require ('express'),
CodeBreaker = require('./code-breaker');

var app = express();

app.get('/setsecret/:secret', function (req, res){
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'Ok, let the game begins'});
});

app.get('/guess/:number', function (req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.guess(number)});
});

app.get('/upgrade/', function (req, res){
  res.send({message: 'Ok upgraded!!!!'});
});

app.get('/delete/', function (req, res){
  res.send({message: 'Ok Deleted!!!!'});
});

module.exports = app;
