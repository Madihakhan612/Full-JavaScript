//Q1. Write a program that takes a positive integer from user & display the following in your browser. 
//(a). number 
//(b). round off value of the number 
//(c). floor value of the number 
//(d). ceil value of the number 

var number = 3.45214;
var number = prompt ("Enter a positive integer: ");
var roundOff = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("Q1." + "<br>" + "Number: " + number + "<br>" + "Round off Value: " + roundOff + "<br>" + "Floor Value: " + floorValue + "<br>" + "Ceil Value: " + ceilValue + "<br><br>");

//Q2.  Write a program that takes a negative floating point number from user & display the following in your browser. 
//(a). number 
//(b). round off value of the number 
//(c). floor value of the number 
//(d). ceil value of the number 

var number = -2.673;
var number = prompt ("Enter a negative floating point number: ");
var roundOff = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("Q2." + "<br>" + "Number: " + number + "<br>" + "Round off Value: " + roundOff + "<br>" + "Floor Value: " + floorValue + "<br>" + "Ceil Value: " + ceilValue + "<br><br>");

//Q3.  Write a program that displays the absolute value of a number. 
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var absoluteValue = "-4 is 4 & absolute value of 5 is 5";
var number = prompt ("Enter a number: ");
var absoluteValue;
if (number < 0 ) {
    absoluteValue = -number;
} else {
    absoluteValue = number;
}
document.write("Q3." + "<br>" + "The number is: " + number + "<br>" + "Absolute Value: " + absoluteValue + "<br><br>");

//Q4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 

var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Q4." + "<br>" + "Random Dice Value: " + diceValue + "<br><br>");

//Q5.  Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var player1Name = prompt("Enter name of player 1: ");
var choice1 = prompt("Enter your " + player1Name + " (1 for Heads, 2 for Tails): ");
var player2Name = prompt("Enter name of player 2: ");
var choice2 = prompt("Enter your " + player2Name + " (1 for Heads, 2 for Tails): ");

var coinValue  = Math.random() * 2 + 1;
var coinresult = Math.floor(coinValue);

 document.write("Q5." + " Random Coin Value: " +"<br>");

if (coinValue === 1 && choice1 == "heads") {
    document.write(player1Name + " you won " + "<br><br>");
} else {
    document.write(player2Name + " you won " + "<br><br>");
}


//Q6.  Write a program that shows a random number between 1 and 100 in your browser.
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Q6." + "<br>" + "Random Number Between 1 and 100 : " + randomNumber + "<br><br>");

//Q7.  Write a program that asks the user about his weight. Parsethe user input and display his weight in your browser. Possible user inputs can be: 
//(a). 50 
//(b). 50kgs 
//(c). 50.2kgs 
//(d). 50.2kilograms

var weight = prompt("Enter your weight in kilograms: ");
var parsedWeight = parseFloat(weight);
document.write("Q7." + "<br>" + "The weight of user is: " + parsedWeight + " kilograms" + "<br><br>");

//Q8.  Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
var userNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var secretNumber = parseInt(prompt("Enter a number between 1 and 10: "));
 
document.write("Q8." + "Random Secret Number" + "<br>")
if (userNumber.includes (secretNumber)) {
    document.write("Congratulations! You guessed the secret number." + secretNumber + "<br><br>");
} else {
    document.write("Sorry, the secret number was: " + secretNumber + "<br><br>");
}

