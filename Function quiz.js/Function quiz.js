alert("This is a Quiz,goodluck!");
var name = window.prompt("What is your name");
var isReady = window.prompt("This quiz is a identification.Are you ready? Answer 'y' for yes, or 'n' for no ");
var ifReady = "y";
var i = 0;
if (isReady == ifReady) {
	var answerSub1 = window.prompt("This statement can be used to return a value at any time");
	var correctAnswer1 = "return statement";
	if (answerSub1 == correctAnswer1) {
		document.write("<p>You got#1 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#1 incorrect it's return statement</p>");
	}
	var answerSub2 = window.prompt("Syntax that allows collecting all the extra parameters passed by the caller into an array");
	var correctAnswer2 = "rest parameter syntax";
	if (answerSub2 == correctAnswer2) {
		document.write("<p>You got#2 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#2 incorrect it's rest parameter syntax</p>");
	}
	var answerSub3 = window.prompt("Function without a name");
	var correctAnswer3 = "anonymous functions";
	if (answerSub3 == correctAnswer3) 
	{
		document.write("<p>You got#3 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#3 incorrect it's anonymous functions</p>");
	}
	var answerSub4 = window.prompt("Function recursively");
	var correctAnswer4 = "recuraive functions";
	if (answerSub4 == correctAnswer4) {
		document.write("<p>You got#4 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#4 incorrect it's recuraive functions</p>");
	}
	var answerSub5 = window.prompt("Inside other Functions");
	var correctAnswer5 = "inner functions";
	if (answerSub5 == correctAnswer5) {
		document.write("<p>You got#5 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#5 incorrect it's inner functions</p>");
	}var grade = i;
		document.write("<p>you got a " + grade + "/5," + name + ".</p>");
} else {
	document.write("<p>Don't be hurry just take your time "+ name +" .Refresh this page if you are ready goodluck!</p>");
}
