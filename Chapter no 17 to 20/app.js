//Q1: Declare and initialize an empty multidimensional array.(Array of arrays)
var mutliArray = [1, 2, 3,[true, "city", "country"], 7, ["apple", "orange",]];
console.log(mutliArray);

//Q2: Declare and initialize a multidimensional array representing the following matrix:
var matrix = [3][4] =[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
document.write("<h1>Matrix:</h1>");
for (var i = 0; i< matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j] + " " );
    }
    document.write("<br>");
}

//Q3:  Write a program to print numeric counting from 1 to 10.
var counting =[1,2,3,4,5,6,7,8,9,10];
document.write("<h1>Counting:</h1>");
for (var i = 0; i < counting.length; i++) {
    document.write(counting[i] + "<br>");
}
//Q4: Write a program to print multiplication table of anynumber using for loop. Table number & length should betaken as an input from user.
var number = parseInt(prompt("Enter a number to print its multiplication table:"));
var length = parseInt(prompt("Enter the length of the multiplication table:"));
document.write("<h1>Multiplication Table of " + number + "</h1>");
for (var i = 1; i <= length; i++) {
    document.write(number + "x" + i + "=" + (number * i) + "<br>");
}

//Q5:  Write a program to print items of the following array using for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write ("<h1>Fruits:</h1>");
for(var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
} 
document.write("<br>");
for (var i = 0 ; i < fruits.length; i++){
   document.write("Element at index " + i + " is " + fruits[i] + "<br>");  
}

//Q6: Generate the following series in your browser. See example output.
//(a). Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("<h1>Counting</h1>");
for (var i = 1; i <= 15; i++){
    document.write(i + " ,");
}
//(b). Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
document.write("<h1>Reverse Counting</h1>");
for(var i = 10; i >= 1; i--) {
    document.write(i + " ,");
}
//(c).Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
var even = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
document.write("<h1>Even Numbers</h1>");
for(var i = 0; i <= 20; i += 2){
    document.write(i + " ,");
}
//(d). Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
document.write("<h1>Odd Numbers</h1>");
for(var i = 1 ; i <= 19; i+= 2){
    document.write(i + " ,");
}
//(e).Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var series = ["2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k"];
document.write("<h1>Series Numbers</h1>");
for(var i = 2 ; i<= 20; i += 2){
   document.write(i + "k ," ); 
}

//Q7: You have an arrayA = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]Write a program to enable “search by user input” in anarray.After searching, prompt the user whether the given item isfound in the list or not. Example:
var bakery = ["cake", "pie apple", "cookie", "chips", "patties"];

var flag = false

var customerOrder = prompt("Welcome to karachi bakery. what do you want to order sir/ma'am? ");
for (var i = 0; i<bakery.length; i++){
    if(bakery[i]==customerOrder){
        alert(customerOrder + "is available at index " + i);
        flag = true;
        break;
    }

}
if(flag=== false) {
    alert(customerOrder + "is available at index " + i);
}
else{
    alert(customerOrder + " is not available in our bakery.");
}

//Q8: Write a program to identify the largest number in thegiven array. A = [24, 53, 78, 91, 12].
var A = [24, 53, 78, 91, 12];
var largest = A[0];
document.write("<h1>Array Number </h1>");

for(var i = 1; i < A.length; i++){
    if(A[i] > largest) {
        largest = A[i];
    }
}
document.write("Array items:" + A + "<br>");
document.write("The largest number is " + largest + "<br>");

//Q9: Write a program to identify the smallest number in thegiven array.
var A = [24, 53, 78, 91, 12]
var smallest = A[0];

document.write("<h1>Smallest Number </h1>");

for(var i = 1 ; i < A.length; i++){
    if(A[i] < smallest) {
        smallest = A[i];
    }
}
document.write("Array items:" + A + "<br>");
document.write("The smallest number is " + smallest + "<br>");

//Q10; Write a program to print multiples of 5 ranging 1 to 100.
var i ;

document.write("<h1>Multiples of 5 Ranging </h1>");

for(var i = 5; i <= 100; i += 5){
    document.write(i + " ,");
}


