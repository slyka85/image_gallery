var express = require("express");
var app = express();
var path = require('path');
var Mustache = require('mustache');
app.use(express.static('.'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000, function() {
  console.log("Started on PORT 5000");
});