var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: '7dkFLKUogbmVY6y35HRKvXshu',
  consumer_secret: 'BqZx2DdrISAbVhbSOUXbZcKpcsyjIDUKC54U8k16MGBVUezakB',
  access_token_key: '305058684-RFAP9w3a3ML6Fz6WBwvzeF1Yy34dbrPuKRT8rRQX',
  access_token_secret: 'sA8WK5tlitIFqRxxbQgHi8SdGF9IXDH3tBRoq4fdGW1DI'
});

var params = {screen_name: 'nodejs'};


app.use(express.static('public'));
app.get('/', function(req, res) {
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      //console.log(tweets);
      res.send(tweets);
    }
  });
  res.send("Hello World! by express");
});
app.listen(8080);
