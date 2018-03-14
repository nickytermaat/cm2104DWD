$(function() {
  alert("Document ready PrintJSON");

  $('#searchform').submit(function() {
    var searchterms = $("#searchterms").val();
    addItemToList(searchterms);
    return false;
  });
});

function addItemToList(item) {
  $('#results').append("<li>" + item + "</li>");
}

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=ced0a703&s=" + searchterms;
  $.getJSON(url, function(jsondata) {
    printJSON(jsondata);
  }); 
}

function printJSON(jsondata) {
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
