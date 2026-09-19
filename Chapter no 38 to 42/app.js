//Q1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 
function power(a,b){
    return a ** b
}
console.log(power(2,3));

//Q2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

let year = Number(prompt("Enter a year:"));

if (isLeapYear(year)) {
    alert(year + " is a leap year");
} else {
    alert(year + " is not a leap year");
}

//Q3.3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
//area = S(S − a)(S − b)(S − c) 
//where, S = ( a + b + c ) / 2 
//Calculate area of triangle using 2 functions

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

let a = Number(prompt("Enter side a:"));
let b = Number(prompt("Enter side b:"));
let c = Number(prompt("Enter side c:"));

let area = calculateArea(a, b, c);

alert("Area of triangle = " + area);

//Q4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there shouldbe 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 

function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    return (total / 300) * 100;
}

function mainFunction() {
    let marks1 = Number(prompt("Enter marks of Subject 1:"));
    let marks2 = Number(prompt("Enter marks of Subject 2:"));
    let marks3 = Number(prompt("Enter marks of Subject 3:"));

    let average = calculateAverage(marks1, marks2, marks3);
    let percentage = calculatePercentage(marks1, marks2, marks3);

    alert("Average = " + average + "\nPercentage = " + percentage + "%");
}

mainFunction();

//Q5.You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

function myIndexOf(str, char) {
    let i = 0;

    while (i < str.length) {
        if (str[i] === char) {
            return i;
        }
        i++;
    }

    return -1;
}

let text = prompt("Enter a string:");
let character = prompt("Enter a character:");

let result = myIndexOf(text, character);

alert("Character found at index: " + result);

//Q6.Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 

function deleteVowels(sentence) {
    let result = "";
    let i = 0;

    while (i < sentence.length) {
        if (
            sentence[i] !== "a" &&
            sentence[i] !== "e" &&
            sentence[i] !== "i" &&
            sentence[i] !== "o" &&
            sentence[i] !== "u"
        ) {
            result += sentence[i];
        }

        i++;
    }

    return result;
}

let sentence = prompt("Enter a sentence (max 25 characters):");

let results = deleteVowels(sentence);

alert("Sentence without vowels: " + result);

//Q7.Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.

function countVowels(text) {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i] + text[i + 1];

        switch (pair) {
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
                count++;
                break;
        }
    }

    return count;
}

function mainFunction() {
    let text = prompt("Enter a sentence:");

    let result = countVowels(text);

    alert("Number of successive vowels: " + result);
}

mainFunction();

//Q8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

let distance = Number(prompt("Enter distance in kilometers:"));

alert(
    "Distance in meters = " + convertToMeters(distance) +
    "\nDistance in feet = " + convertToFeet(distance) +
    "\nDistance in inches = " + convertToInches(distance) +
    "\nDistance in centimeters = " + convertToCentimeters(distance)
);

//Q9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 

function calculateOvertime(hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * 12;
    } else {
        return 0;
    }
}

let hours = Number(prompt("Enter hours worked:"));

let overtimePay = calculateOvertime(hours);

alert("Overtime pay = Rs. " + overtimePay);

//Q10.A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 

let amount = Number(prompt("Enter amount in hundreds:"));

let amountInRupees = amount * 100;

let notes100 = Math.floor(amountInRupees / 100);
amountInRupees = amountInRupees % 100;

let notes50 = Math.floor(amountInRupees / 50);
amountInRupees = amountInRupees % 50;

let notes10 = Math.floor(amountInRupees / 10);

alert(
    "100 notes = " + notes100 +
    "\n50 notes = " + notes50 +
    "\n10 notes = " + notes10
);

