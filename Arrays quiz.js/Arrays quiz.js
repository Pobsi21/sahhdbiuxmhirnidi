alert("This is a Quiz,goodluck!");
var name = window.prompt("What is your name");
var isReady = window.prompt("This quiz is a identification.Are you ready? Answer 'y' for yes, or 'n' for no ");
var ifReady = "y";
var i = 0;
if (isReady == ifReady) {
	var answerSub1 = window.prompt("___ would apply a callback to every  array element.");
	var correctAnswer1 = "map()";
	if (answerSub1 == correctAnswer1) {
		document.write("<p>You got#1 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#1 incorrect it's map()</p>");
	}
	var answerSub2 = window.prompt("Arrays come witrh a plethora of ___");
	var correctAnswer2 = "array methods";
	if (answerSub2 == correctAnswer2) {
		document.write("<p>You got#2 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#2 incorrect it's array methods</p>");
	}var grade = i;
		document.write("<p>you got a " + grade + "/2," + name + ".</p>");
} else {
	document.write("<p>Don't be hurry just take your time "+ name +" .Refresh this page if you are ready goodluck!</p>");
}
