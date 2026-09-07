//Q1: Declare an empty array using JS literal notation to store student names in future. 
var studentNames = new Array("john", "jane", "doe");// JS object notation
console.log(studentNames);

//Q2: Declare an empty array using JS object notation to store student names in future.
var studentNames = ["bob", "alice", "charlie"]; // JS literal notation
console.log(studentNames);

//Q3:  Declare and initialize a strings array. 
var fruits = ["apple", "cherry", "banana", "grapes","orange"];
console.log(fruits);

//Q4:.  Declare and initialize a numbers array. 
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

//Q5: Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];
console.log(booleanArray);

//Q6: Declare and initialize a mixed array.
var mixedArray = ["apple", 1, true, "mango", 6, false];
console.log(mixedArray);

//Q7:  Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h1>Qualifications:</h1>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

//Q8: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like: 
var studentNames = ["Ayesha", "Tasnim", "Uama"];
var studentScores = [450, 400, 350];
document.write("<h1>Student Scores and Percentages:</h1>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / 500) * 100;
    document.write("score of " + studentNames[i] + " is " + studentScores[i] +
        " Percentage: " + percentage + " % <br>");
}

//Q9: Initialize an array with color names. Display the array elements in your browser.
var colors = ["red", "blue", "green", "yellow"];
document.write("<h1>Colors:</h1>");
for (var i = 0; i < colors.length; i++) {
    document.write((i + 1) + ") " + colors[i] + "<br>");
}
//(a). Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
var newColor = prompt("What color would you like to add to the beginning?");
colors.unshift(newColor);
document.write("<h1>Updated Colors:</h1>");
for (var i = 0; i < colors.length; i++) {
    document.write((i + 1) + ") " + colors[i] + "<br>");
}
//(b). Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
var newColorEnd = prompt("What color would you like to add to the end?");
colors.push(newColorEnd);
document.write("<h1>Updated Colors:</h1>");
for (var i = 0 ; i < colors.length; i++) {
    document.write((i + 1) + ") " + colors[i] + "<br>");
}
//(c). Add two more color to the beginning of the array. Display the updated array in your browser. 
var newColor1 = prompt("What is the first color you want to add to the beginning?");
var newColor2 = prompt("What is the second color you want to add to the beginning?");
colors.unshift(newColor1, newColor2);
document.write("<h1>Updated More Colors:</h1>");
for (var i = 0 ; i < colors.length; i++) {
    document.write((i + 1) + ") " + colors[i] + "<br>");
}

//(d).  Delete the first color in the array. Display the updated array in your browser.
var deletedColor = colors.shift();
document.write("<h1>After Deleting First Color:</h1>");
for (var i = 0 ; i < colors.length; i++) {
    document.write((i + 1) + ") " + colors[i] + "<br>");
} 
//(e). Delete that last color in the array. Display the updated array in your browers.
var deletedLastColor = colors.pop();
document.write("<h1>After Deleting Last Color:</h1>");
for (var i = 0 ; i < colors.length; i++) {
    document.write((i + 1) + ") " + colors[i] + "<br>");
}
//(f).  Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
var colorToAdd = prompt ("What color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h1>After Adding Color At Index " + indexToAdd + ":</h1>");
for (var i = 0 ; i < colors.length; i++) {
    document.write((i + 1 ) + ") " + colors[i] + "<br>"); 
}
//(g).  Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
var indexToDelete = parseInt(prompt("At which index do you want to delete color (s)?"));
var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h1>After Deleting Colors:</h1>");
for (var i = 0 ; i < colors.length; i++) {
    document.write((i + 1 ) + ") " + colors[i] + "<br>"); 
}

//Q10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var studentScores = [320, 230, 480, 120];
var sortedScores = studentScores.slice().sort(function(a, b) {
    return a - b;
});
document.write("<h1>Student Scores:</h1>");
document.write("Scores of Students: " + studentScores + "<br>");
document.write("Ordered Scores of Students: " + sortedScores + "<br>");

//Q11:Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.


var cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi"];
var selectedCities = cities.slice(0 , 3);
document.write("<h1>Cities:</h1>");
for (var i = 0 ; i < cities.length; i++) {
    document.write((i + 1 ) + ") " + cities [i] + "<br>");
}
document.write("<h1>Selected Cities:</h1>");
for (var i = 0 ; i < selectedCities.length; i++) {
    document.write((i + 1 ) + ") " + selectedCities[i] + "<br>"); 
}

//Q12:   Write a program to create a single string from the below mentioned array:
var arr = ["This", "is", "my", "cat"];
var singlestring = arr.join(" ");
document.write("<h1>Array:</h1>");
document.write("Array:" + arr + "<br>");
document.write("<h1>String:</h1>");
document.write("String:" + singlestring + "<br>");

//Q13:  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray = [];

fifoArray.push("first");
fifoArray.push("second");
fifoArray.push("third");
document.write("<h1>FIFO ARRAY:</h1>");
document.write("FIFO Array:" + fifoArray + "<br>");
document.write("Accessing values in FIFO order:<br>");
for (var i = 0 ; i < fifoArray.length; i++) {
    document.write((i + 1 ) + ") " + fifoArray[i] + "<br>");
}

//Q14:  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out)
var lifoArray = [];

lifoArray.push("first");
lifoArray.push("second");
lifoArray.push("third");
document.write("<h1>LIFO ARRAY:</h1>");
document.write("LIFO Array:" + lifoArray + "<br>");
document.write("Accessing values in LIFO order:<br>");
for (var i = lifoArray.length - 1; i >= 0; i--) {
    document.write((i + 1 ) + ") " + lifoArray[i] + "<br>");
}

//Q15:  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h1>Phone Manufacturers:</h1>");
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");


