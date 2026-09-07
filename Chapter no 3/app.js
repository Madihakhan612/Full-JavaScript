//Q1.Declare a variable called age & assign to it your age.Show your age in an alert box.
var age = 23;
alert("I am" + age + "years old");

//Q2.DEclare & initialize a variable to keep track of how many time a visitor has visited a web page.Show his/her number of visit on your web page.For example:"You have visited this site N time".
var visiteCount = 14;
alert("You have visited this site" + visiteCount + "time");

//Q3.Declare a variable called birthYear & assign to it your birth year.Show the followin message in your browers:
var birthYear = 2003;
document.write("My birth year is" + birthYear + "<br>");
document.write("Date type of my declared variable is number"+"<br><br>");


//Q4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");