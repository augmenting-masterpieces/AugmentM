var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

app.all('/*', function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});

app.listen(PORT)
console.log("server is listening on port " + PORT)
