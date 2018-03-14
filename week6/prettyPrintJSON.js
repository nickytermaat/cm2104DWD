$(function() {
  alert("Document ready prettyPrintJSON");

  $('#searchform').submit(function() {
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=ced0a703&s=" + searchterms;
  $.getJSON(url, function(jsondata) {
    prettyPrintJSON(jsondata);
  });
}

function prettyPrintJSON(jsondata) {
  var pretty = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<p>" + pretty + "</p>");
}
