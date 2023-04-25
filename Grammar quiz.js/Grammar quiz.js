alert("This is a Quiz,goodluck!");
var name = window.prompt("What is your name");
var isReady = window.prompt("This quiz is a identification. Are you ready? Answer 'y' for yes, or 'n' for no ");
var ifReady = "y";
var i = 0;
if (isReady == ifReady) {
	var answerSub1 = window.prompt("Where javascript grammar very similar?");
	var correctAnswer1 = "c family";
	if (answerSub1 == correctAnswer1) {
		document.write("<p>You got#1 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#1 incorrect it's c family</p>");
	}
	var answerSub2 = window.prompt("It can have unicode characters");
	var correctAnswer2 = "identifiers";
	if (answerSub2 == correctAnswer2) {
		document.write("<p>You got#2 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#2 incorrectit's identifiers</p>");
	}
	var answerSub3 = window.prompt("where this (//) or (/**/)commonly used?");
	var correctAnswer3 = "comments";
	if (answerSub3 == correctAnswer3) {
		document.write("<p>You got#3 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#3 incorrect it's comments</p>");
	}var grade = i;
		document.write("<p>you got a " + grade + "/3," + name + ".</p>");
} else {
	document.write("<p>Don't be hurry just take your time "+ name +" .Refresh this page if you are ready goodluck!</p>");
}
