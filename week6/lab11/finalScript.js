$(function() {
  alert("Document ready finalScript");

  $('#searchform').submit(function() {
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=ced0a703&s=" + searchterms;
  $.getJSON(url, function(jsondata) {
    addResultTitels(jsondata);
  });
}

function addResultTitels(jsondata) {
  var htmlstring = "";
  for (var i = 0; i < 10; i++) {
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</title>";
  }

  $("#results").html(htmlstring);
}
