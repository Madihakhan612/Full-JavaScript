//Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("1. Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

//Q2. Repeat task1 for subtraction, multiplication, division & modulus.
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("2. Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

//Q3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 
var a;

document.write("3. Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a = a + 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder + "<br><br>");

//Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("4. Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");

//Q5. Write a script to display multiplication table of any number in your browser. E.g 
var number = 4;

document.write("5. Table of " + number + "<br>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br><br>");

//Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C"+"<br><br>");

//Q7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges Compute the total cost & show the receipt in your browser.
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("7.<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");

document.write("Total cost of your order is " + totalCost + "<br><br>");

//Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser .
var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("8.<h1>Marks Sheet</h1>");

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%" +"<br><br>");

//Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) .
var usDollar = 10;
var saudiRiyal = 25;

var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("9. <h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

//Q10.. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression.
var number = 10;

var result = ((number + 5) * 10) / 2;

document.write("10. <h1>Arithmetic Result</h1>");
document.write("Result: " + result + "<br><br>");

//Q11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("11. <h1>Age Calculator</h1>");

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old."+ "<br><br>");

//Q12.The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.  Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("12. <h1>The Geometrizer</h1>");

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

//Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maximumAge = 65;
var snacksPerDay = 3;

var totalSnacks = (maximumAge - currentAge) * snacksPerDay;

document.write("13. <h1>The Lifetime Supply Calculator</h1>");

document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");