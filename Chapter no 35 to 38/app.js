//Q1.  Write a function that displays current date & time in your browser. 

function displayDateTime() {
    let currentDate = new Date();
    document.write(`Q1. Current Date & Time: <br> ${currentDate}<br><br>`);
}
displayDateTime();

//Q2. . Write a function that takes first & last name and then it greets the user using his full name. 

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    document.write(`Q2. Greeting: Hello, <br> ${fullName}!<br><br>`);
}
greetUser("Madiha", "Khan");

//Q3.  Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

let sum = addTwoNumbers(5, 10);
document.write(`Q3. Sum: <br> ${sum}<br><br>`);

//Q4.  Calculator:  
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
calculator(53, 5, '+' );
let calcResult = calculator(53, 5, '+');
document.write(`Q4. Calculator Result: <br> ${calcResult}<br><br>`);

//Q5.  Write a function that squares its argument.
function squareNumber(num) {
    return num * num;
}
let squareResult = squareNumber(7);
document.write(`Q5. Square Result: <br> ${squareResult}<br><br>`);

//Q6. Write a function that computes factorial of a number.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
let factorialResult = factorial(5);
document.write(`Q6. Factorial Result: <br> ${factorialResult}<br><br>`);

//Q7.  Write a function that take start and end number as inputs & display counting in your browser.
function displayCounting(start, end) {
    document.write(`Q7. Counting: <br>`);
    for (let i = start; i <= end; i++) {
        document.write(`${i}<br><br>`);
    }
} 
displayCounting(1, 10);

//Q8.  Write a nested function that computes hypotenuse of a right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2 
function computeHypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }
    let hypotenuseSquare = square(base) + square(perpendicular);
    let hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
}
let base = 3;
let perpendicular = 4;
let hypotenuseResult = computeHypotenuse(base, perpendicular);
document.write(`Q8. Hypotenuse Result: <br> ${hypotenuseResult}<br><br>`);

//Q9.  Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables
function calculateRectangleArea(width, height) {
    return width * height;
}
calculateRectangleArea(5, 10);

// i. Arguments as value
let area1 = calculateRectangleArea(5, 10);
document.write(`Q9. Area (Arguments as value): <br> ${area1}<br><br>`);

// ii. Arguments as variables
let rectWidth = 8;
let rectHeight = 6;
let area2 = calculateRectangleArea(rectWidth, rectHeight);
document.write(`Area (Arguments as variables): <br> ${area2}<br><br>`);

//Q10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam. 

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
}
isPalindrome("madam");
let palindromeResult = isPalindrome("madam");
document.write(`Q10. Is 'madam' a palindrome? <br> ${palindromeResult}<br><br>`);

//Q11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
//EXAMPLE STRING : 'the quick brown fox'  
//EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
capitalizeWords("the quick brown fox");
let result = capitalizeWords("the quick brown fox");
document.write(`Q11. Capitalized String: <br> ${result}<br><br>`);

//Q12.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
//EXAMPLE STRING : 'Web Development Tutorial'  
//EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
findLongestWord("Web Development Tutorial");
let longestWordResult = findLongestWord("Web Development Tutorial");
document.write(`Q12. Longest Word: <br> ${longestWordResult}<br><br>`);

//Q13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
countLetterOccurrences("JSResourceS.com", "o");
let letterCountResult = countLetterOccurrences("JSResourceS.com", "o");
document.write(`Q13. Letter Count: <br> ${letterCountResult}<br><br>`);

//Q14. The Geometrizer: Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:  
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:  
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}

function calcArea(radius) {
    let area = Math.PI * radius * Math.pow(radius, 2);
    return area;
}
let radius = 5;
let circumferenceResult = calcCircumference(radius);
let areaResult = calcArea(radius);
document.write(`Q14. Circumference: ${circumferenceResult}<br>Area: ${areaResult}<br><br>`);


