
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html

	document.getElementById('content').innerHTML = items_html;
}

function addContentTwo() {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	for (var i = 0; i < items.length; i++) {
		var newList = document.createElement("ul");
		var newListItem = document.createElement("li");
		var textPara = document.createTextNode(items[i]);
		newList.appendChild(newListItem).appendChild(textPara);
		document.getElementById('content').appendChild(newList);
	}
}
