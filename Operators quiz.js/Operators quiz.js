alert("This is a Quiz,goodluck!");
var name = window.prompt("What is your name");
var isReady = window.prompt("This quiz is a identification.Are you ready? Answer 'y' for yes, or 'n' for no ");
var ifReady = "y";
var i = 0;
if (isReady == ifReady) {
	var answerSub1 = window.prompt("JavaScript numeric operators +,-,*,/,% are called?");
	var correctAnswer1 = "remainder";
	if (answerSub1 == correctAnswer1) {
		document.write("<p>You got#1 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#1 incorrect it's remainder</p>");
	}
	var answerSub2 = window.prompt("JavaScript numeric operator ** called?");
	var correctAnswer2 = "exponentiation";
	if (answerSub2 == correctAnswer2) {
		document.write("<p>You got#2 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#2 incorrectit's exponentiation</p>");
	}
	var answerSub3 = window.prompt("This operator also does string con concatenation");
	var correctAnswer3 = "+";
	if (answerSub3 == correctAnswer3) {
		document.write("<p>You got#3 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#3 incorrect it's +</p>");
	}
	var answerSub4 = window.prompt("What is this (==)called? ");
	var correctAnswer4 = "double-equals operator";
	if (answerSub4 == correctAnswer4) {
		document.write("<p>You got#4 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#4 incorrect it's double-equals operator</p>");
	}
	var answerSub5 = window.prompt("What is this (===)called?");
	var correctAnswer5 = "triple-equals operator";
	if (answerSub5 == correctAnswer5) {
		document.write("<p>You got#5 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#5 incorrect it's triple-equals operator</p>");
	}var grade = i;
		document.write("<p>you got a " + grade + "/5," + name + ".</p>");
} else {
	document.write("<p>Don't be hurry just take your time "+ name +" .Refresh this page if you are ready goodluck!</p>");
}
