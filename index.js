var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/welcome', (req, res) =>{
  res.sendFile(path.join(__dirname + '/welcome.html'));
});

app.get('/sidebar', (req, res) =>{
  res.sendFile(path.join(__dirname + '/selectDish.html'));
});

app.listen(8080);