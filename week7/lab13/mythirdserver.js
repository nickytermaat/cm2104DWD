var http = require('http');
var currentDate = require('knock-knock-jokes');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var randomJoke = knockknock();
  res.end(randomJoke);
}).listen(8080);
