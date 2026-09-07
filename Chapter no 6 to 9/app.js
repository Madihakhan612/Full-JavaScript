//Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  
var a = 10;

document.write("<h2>Result:</h2>");

document.write("The value of a is: " + a + "<br>");
document.write("----------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

//Q2. What will be the output in variables a, b & result after execution of the following script: 
var a = 2;
var b = 1;

document.write("<h2>Result:</h2><br>");

document.write("The value of --a is: " + (--a) + "<br>");

a = 2;
b = 1;
document.write("The value of --a - --b is: " + (--a - --b) + "<br>");

a = 2;
b = 1;
document.write("The value of --a - --b + ++b is: " + (--a - --b + ++b) + "<br>");

a = 2;
b = 1;

var result = --a - --b + ++b + b--;

document.write("The value of --a - --b + ++b + b-- is: " + result + "<br><br>");

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

//Q3. Write a program that takes input a name from user & greet the user. 
var userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");

//Q4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
var number = prompt("Enter a number", "5");

if (number === "" || number === null) {
    number = 5;
}

document.write("<h2>Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br><br>");
}

//Q5.Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = +prompt("Enter obtained marks for " + subject1);
var marks2 = +prompt("Enter obtained marks for " + subject2);
var marks3 = +prompt("Enter obtained marks for " + subject3);

var obtainedMarks = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (obtainedMarks / grandTotal) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + (marks1 / 100 * 100) + "%</td></tr>");

document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + (marks2 / 100 * 100) + "%</td></tr>");

document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + (marks3 / 100 * 100) + "%</td></tr>");

document.write("<tr><th></th><th>" + grandTotal + "</th><th>" + obtainedMarks + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");

