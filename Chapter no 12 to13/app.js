//Q1.Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

var ch = prompt("Enter a character:");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57){
    alert("It is a Number");
}
else if (code >= 65 && code <= 90){
    alert("It is an Uppercase Letter");
}
else if(code >= 97 && code <= 122){
    alert("It is a Lowercase Letter");
}
else{
    alert("Invalid Input");
}

//Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2){
    alert(num1 + "is larger");
}
else if (num2 > num1){
    alert(num2 + "is larger");
}
else{
    alert("Both number are equal");
}

//Q3.. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var num = +prompt("Enter a number:");

if (num > 0){
    alert("Positive Number");
}
else if (num < 0){
    alert("Negative Number");
}
else{
    alert("Zero");
}

//Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var ch = prompt("Enter a character:");

if (
    ch === "a" || ch === "e" || ch
=== "i" || ch === "o" || ch ===
"u" ||
    ch === "A" || ch === "E" || ch ===
"U"       
){
    alert(true);
}
else{
    alert(false);
}

//Q5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 
var correctPassword = "admin123";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}

//Q6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; } 
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
alert(greeting);

//Q7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 
var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else if (time >= 2100 && time < 2359) {
    alert("Good night!");
}
else{
    alert("Invalid time");
}
