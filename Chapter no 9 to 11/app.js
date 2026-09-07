//Q.1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
var city = prompt("Enter your city name");

if (city == "karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("bye bye");
}

//Q2.Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

var gender = prompt("Enter your gender");

if (gender === "female"){
    alert("Good Morning Ma’am");
}
else {
    alert("Good Morning Sir");
}

//Q3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 
var color = prompt("Enter traffic signal color")

if (color === "red"){
    alert("Must Stop");
}
else if (color === "yellow"){
    alert("Ready to Move");
}
else if (color === "green"){
    alert("Move Now");
} 
else{
    alert("Invalid color");
} 

//Q4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message 
var fuel = prompt("Enter remaining fuel in litres");

if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert("Fuel level is sufficient");
}

//Q5.. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//(a.)
var a = 4;
if (++a === 5){
    alert("give condition for variable a is true")
}
//(b.)
var b = 82;
if (b++ === 83){
    alert("give condition for variable b is true");
}
//(C.)
var c = 12;
if (c++ === 13)
    { alert("condition 1 is true"); } 
if (c === 13)
    { alert("condition 2 is true"); } 
if (++c < 14)
    { alert("condition 3 is true"); } 
if(c === 14)
    { alert("condition 4 is true"); } 
//(d.)
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}
//(e.)
if (true)
    { alert("True"); 
} 
if (false){ 
    alert("False"); 
}   
//(f.)
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}  

//Q6.Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
//Input Marks
var totalMarks = +prompt("Enter Total Marks:");

var sub1 = +prompt("Enter Marks of Subject 1:");
var sub2 = +prompt("Enter Marks of Subject 2:");
var sub3 = +prompt("Enter Marks of Subject 3:");

//Calculate
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;

//Grade and Remarks
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry";
}

//Output
document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks:" + totalMarks + "<br>");
document.write("Marks Obtained:" + obtainedMarks + "<br>");
document.write("Percentage:" + percentage.toFixed(2) + "%<br>");
document.write("Grade:" + grade + "<br>");
document.write("Remarks:" + remarks);

//Q7.Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 

var secretNumber = 7;

var guess = +prompt("Guess the secret number (1 to 10):");

if (guess ===secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber){
    alert("Close enough to the correct answer");
}
else {
    alert("Wrong answer! Try again.");
}

//Q8.Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = +prompt("Enter a number:");

if (number % 3 === 0){
    alert("The number is divisible by 3.");
}
else{
    alert("The number is not divisible by 3.");
}

//Q9.Write a program that checks whether the given input is an even number or an odd number. 
var number = +prompt("Enter a number:");

if (number % 2 ===0){
    alert("The number is Even.");
}
else{
    alert("The is number Odd.");
}

//Q10.Write a program that takes temperature as input and shows a message based on following criteria 
var temperature = +prompt("Enter the temperature:");

if (temperature > 40){
    alert("It is too hot outside.");
}
else if (temperature > 30){
    alert("The Weather today is Normal.");
}
else if (temperature > 20){
    alert("Today’s Weather is cool.");
}
else if (temperature > 10){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("It is very cold outside.");
}

//Q11.Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+"){
    alert("Result: " + (num1 + num2));
}
else if (operation === "-"){
    alert("Result: " + (num1 - num2));
}
else if (operation === "*"){
    alert("Result: " + (num1 * num2));
}
else if (operation === "/"){
    alert("Result: " + (num1 / num2));
}
else if (operation === "%"){
    alert("Result: " + (num1 % num2));
}
else{
    alert("Invalid Operation");
}

