$(function() {
  alert("Document ready ExpansionFinalScript");

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
    prettyPrintJSON(jsondata);
  });
}

function addResultTitels(jsondata) {
  var htmlstring = "";
  for (var i = 0; i < 10; i++) {
    htmlstring += "<li>" + jsondata.Search[i].Title + "</title>";
    //htmlstring += "<li>" + jsondata.Search[i]. + "</title>";
  }

  $("#results").html(htmlstring);
}

function prettyPrintJSON(jsondata) {
  var pretty = JSON.stringify(jsondata, null, 4);
  console.console.log(pretty);
}
