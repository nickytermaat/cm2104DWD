$(function() {
  alert("Document ready ExpansionFinalScript");

  $('#searchform').submit(function() {
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=&ced0a703s=" + searchterms;
  $.getJSON(url, function(jsondata) {
    addResultTitels(jsondata);
    prettyPrintJSON(jsondata);
  });
}

function addResultTitels(jsondata) {
  var htmlstring = "<table><thead><tr><th>Poster</th><th>Film title</th><th>Release year</th><th>Type</th><th>IMDB page</th><th>Rotten Tomatoes</th><th>Plot</th></thead><tbody>";
  for (var i = 0; i < 5; i++) {
    if (jsondata.Search[i].Type == "movie") {
      htmlstring += "<tr><td>" + "<img src=" + jsondata.Search[i].Poster + "></td><td>";
      htmlstring += jsondata.Search[i].Title + "</td><td>";
      htmlstring += jsondata.Search[i].Year + "</td><td>";
      htmlstring += jsondata.Search[i].Type + "</td><td>";
      htmlstring += "<a href=\"http://www.imdb.com/title/" + jsondata.Search[i].imdbID + "\">" + jsondata.Search[i].Title + "</a>" + "</td><td>";
      htmlstring += jsondata.Search[i].Ratings + "</td><td>"; // undefined?
      htmlstring += jsondata.Search[i].Plot + "</td></tr>"; //undefined?
    }
  }
  htmlstring += "</tbody></table>";
  $("#results").html(htmlstring);
}

function prettyPrintJSON(jsondata) {
  var pretty = JSON.stringify(jsondata, null, 8);
  console.log(pretty);
}
