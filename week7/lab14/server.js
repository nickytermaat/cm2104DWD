var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: '7dkFLKUogbmVY6y35HRKvXshu',
  consumer_secret: 'BqZx2DdrISAbVhbSOUXbZcKpcsyjIDUKC54U8k16MGBVUezakB',
  access_token_key: '305058684-RFAP9w3a3ML6Fz6WBwvzeF1Yy34dbrPuKRT8rRQX',
  access_token_secret: 'sA8WK5tlitIFqRxxbQgHi8SdGF9IXDH3tBRoq4fdGW1DI'
});

app.use(express.static('public'))

// app.get('/', function(req, res) {
//   var params = {screen_name: 'nodejs'};
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if(!error) {
//       // console.log(tweets);
//       // res.send(tweets);
//       var output = "";
//       for (var t = 0; t <tweets.length; t++) {
//         output += "<div>";
//         output += "<h2>" + tweets[t].user.screen_name + "</h2>";
//         output += "<p>" + tweets[t].text + "</p>";
//         output += "</div>";
//       }
//       res.send(output);
//     } else {
//       res.send("Hello World! by express");
//     }
//   });
// });

app.get('/search', function(req, res) {
  var searchquery = req.query.q;
  console.log("Searchquery: " + searchquery);
  var params = {q: searchquery};
  client.get('search/tweets', params, function(error, tweets, response) {
    if(!error) {
      console.log(tweets);
      console.log("Amount of tweets: " + tweets.length);
      var output = "";
      for (var t = 0; t < 5; t++) {
        output += "<div>";
        //output += "<h2>" + tweets[t].user.screen_name + "</h2>";
        output += "<p>" + tweets[t].text + "</p>";
        output += "</div>";
      }
      console.log("Output ready");
      res.send(output);
    } else {
      res.send("Hello World! by express");
    }
  });
});

app.listen(8080);
