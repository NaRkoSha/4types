var textIdea = "<h1>Введи свою идею ниже</h1>";
var inputIdea = "<input id=\"inputIdea\" type=\"text\" value=\"Your idea\" size=50>";
var buttonIdeaResult = "<input id=\"buttonIdeaResult\" onclick=\"getIdea();\"type=\"button\" value=\"Accept\">";
var idea;

function changeIdea () {
	document.getElementById("text").innerHTML = textIdea + inputIdea + "<br>" + buttonIdeaResult;
}

function getIdea () {
	/*var idea = document.getElementById('inputIdea').value;
	document.getElementById('log').innerHTML += "<br>" + idea;*/
	
	idea = document.getElementById('inputIdea').value;
	document.getElementById("text").innerHTML = "<h1>Thanks for idea!</h1><br><h2>" + idea + "</h2>";
	idea = '';
}