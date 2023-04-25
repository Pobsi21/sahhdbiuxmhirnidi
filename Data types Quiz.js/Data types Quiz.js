alert("This is a Quiz,goodluck!");
var name = window.prompt("What is your name");
var isReady = window.prompt("This quiz have a choices.Are you ready? Answer 'y' for yes, or 'n' for no ");
var ifReady = "y";
var i = 0;
if (isReady == ifReady) {
	var answerSub1 = window.prompt("Where is Number used for?a)large integers or b)number values or c)identifiers or d)Indicate a deliberate non-value");
	var correctAnswer1 = "b";
	if (answerSub1 == correctAnswer1) {
		document.write("<p>You got#1 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#1 incorrect it's b)number values</p>");
	}
	var answerSub2 = window.prompt("Where is Boolean used fo?a)number values or b)identifiers or c)conditional logic or d)large integers");
	var correctAnswer2 = "c";
	if (answerSub2 == correctAnswer2) {
		document.write("<p>You got#2 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#2 incorrect it's c)conditional logic</p>");
	}
	var answerSub3 = window.prompt("Where is string used for?a)store text or b)number value or c)identifiers or d)integers");
	var correctAnswer3 = "a";
	if (answerSub3 == correctAnswer3) {
		document.write("<p>You got#3 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#3 incorrect it's a)store text</p>");
	}
	var answerSub4 = window.prompt("Where is symbol used for?a)identifiers or b)integers or c)number or d)symbol");
	var correctAnswer4 = "a";
	if (answerSub4 == correctAnswer4) {
		document.write("<p>You got#4 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#4 incorrect it's a)identifiers</p>");
	}
	var answerSub5 = window.prompt("Where is BigInt used for?a)big integers or b)number or c)symbols or d)identifiers");
	var correctAnswer5 = "a";
	if (answerSub5 == correctAnswer5) {
		document.write("<p>You got#5 correct!</p>");
		i++;
	} else {
		document.write("<p>you got#5 incorrect it's a)big integers</p>");
	}var grade = i;
		document.write("<p>you got a " + grade + "/5," + name + ".</p>");
} else {
	document.write("<p>Don't be hurry just take your time "+ name +" .Refresh this page if you are ready goodluck!</p>");
}
