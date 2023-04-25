alert("This is a Quiz,goodluck!");
var name = window.prompt("What is your name");
var isReady = window.prompt("This quiz is a identification.Are you ready? Answer 'y' for yes, or 'n' for no ");
var ifReady = "y";
var i = 0;
if (isReady == ifReady) {
	var answerSub1 = window.prompt("Conditional statements are supported by __ and __");
	var correctAnswer1 = "if and else";
	if (answerSub1 == correctAnswer1) {
		document.write("<p>You got#1 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#1 incorrect it's if and else</p>");
	}
	var answerSub2 = window.prompt("Good for basic looping");
	var correctAnswer2 = "while loops";
	if (answerSub2 == correctAnswer2) {
		document.write("<p>You got#2 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#2 incorrect it's while loops</p>");
	}
	var answerSub3 = window.prompt("Ensure that the body of the loop is executes atleast once");
	var correctAnswer3 = "do...while loops";
	if (answerSub3 == correctAnswer3) {
		document.write("<p>You got#3 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#3 incorrect it's do...while loops</p>");
	}
	var answerSub4 = window.prompt("It tels you the control information for your loop on a single line");
	var correctAnswer4 = "for loop";
	if (answerSub4 == correctAnswer4) {
		document.write("<p>You got#4 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#4 incorrect it's for loop</p>");
	}
	var answerSub5 = window.prompt("Errors are handled using the?");
	var correctAnswer5 = "try...catch";
	if (answerSub5 == correctAnswer5) {
		document.write("<p>You got#5 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#5 incorrect it's try...catch</p>");
	}var grade = i;
		document.write("<p>you got a " + grade + "/5," + name + ".</p>");
} else {
	document.write("<p>Don't be hurry just take your time "+ name +" .Refresh this page if you are ready goodluck!</p>");
}
