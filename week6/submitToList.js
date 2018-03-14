$(function() {
  alert("Document ready SubmitToList");

  $('#searchform').submit(function() {
    var searchterms = $("#searchterms").val();
    addItemToList(searchterms);
    return false;
  });
});

function addItemToList(item) {
  $('#results').append("<li>" + item + "</li>");
}
