
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World2!');
});


app.get('/prueba', function (req, res) {
  res.sendFile(__dirname + '/prueba.html');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
