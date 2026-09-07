// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");

//Q2.. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

var mobilePhone = prompt("Enter your favorite mobile phone model:");
var phoneLength = mobilePhone.length;
document.write("<br>");

document.write("Your favorite mobile has " + mobilePhone + "characters." + "<br>");
document.write("Length of string: " + mobilePhone.length + "<br>");

//Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 
var word = "Pakistan";
var index = word.indexOf("n");
document.write("<br>");

document.write("String: " + word + "<br>");
document.write("Index of 'n':" + index + "<br>");

//Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
var word = "Hello World";
var index = word.lastIndexOf("l");
document.write("<br>");

document.write("String: " + word + "<br>");
document.write("Last Index of 'l':" + index + "<br>");

//Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var word = "Pakistan";
var index = word.charAt("3");
document.write("<br>");

document.write("String: " + word + "<br>");
document.write("Character of index 3: " + index + "<br>");

//Q6. Repeat Q1 using string concat() method.
var firstName = prompt("Enter your first name");
var lastName =  prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");

document.write("<br>");

//Q7.. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var result = city.replaceAll("Hyder","Islam");
document.write("<br>");

document.write("City: " + city + "<br>" );
document.write("After replacement:" + result + "<br>");

//Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";

var result = message.replaceAll("and", "&");
document.write("<br>");

document.write("Message :"  +  message + "<br>");
document.write("After replacement :"  +   result + "<br>");

//Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var str = "472";
var num = parseInt(str);

document.write("<br>");
document.write("String: " + str + "<br>");
document.write("Number: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");

//Q10.Write a program that takes user input. Convert and show the input in capital letters.

var userInput = "peanuts";
var upperCaseInput = userInput.toUpperCase();

document.write("<br>");
document.write("User input :"  +  userInput + "<br>");
document.write("Uppercase :"   +  upperCaseInput + "<br>");

//Q11.Write a program that takes user input. Convert and show the input in title case. 

var userInput = "javascript";
var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("<br>");
document.write("User input :"  + userInput + "<br>");
document.write("Title case :"  + titleCaseInput + "<br>");

//Q12.Write a program that converts the variable num to string.

var num = 35.36;
var numString = num.toString().replace(".", "");

document.write("<br>");

document.write("Number :"  + num + "<br>");
document.write("String:"  + numString + "<br>");
document.write("Type:" + typeof numString + "<br>");
document.write("<br>");


//Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var userName = prompt("Enter your username:");

var valid = true;

for(var i = 0; i < userName.length; i++ ){
    var code = userName.charCodeAt(i);

    //ASCII code of ! is 33 
    //ASCII code of , is 44 
    //ASCII code of . is 46 
    //ASCII code of @ is 64

    if(code == 33 || code == 44 || code == 46 || code == 64){
        valid = false;
        break;
    }
}
if (valid){
    alert("Valid userName: " + userName);
}
else{
    alert("Please enter a valid username");
}

//Q14.You have an array 
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
var A = ["cake", "apple pie”", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

var searchItem = userInput.toLowerCase();

var index = A.indexOf(searchItem);

if (index !== -1){
    alert(searchItem + " is available at index " + index + " in our bakery");
}
else{
    alert("We are sorry. " + searchItem + " is not available in our bakery");

}

//Q15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

var passWord = prompt("Enter your password:");

var isValid = true;

var alphabet = false;
var number = false;
var startNumber = false;

var password = passWord;

 // Password ki length check
if (password.length < 6) {
    document.write("Password must be at least 6 characters long<br>");
}
   // First character number hai ya nahi
if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    startNumber = true;
}
if (startNumber == true) {
    document.write("Password can not begin with a number<br>");
}
if (alphabet == false) {
    document.write("Password must contain alphabets<br>");
}
if (number == false) {
    document.write("Password must contain numbers<br>");
}
  // Alphabet aur number check
for (var i = 0; i < password.length; i++) {

    var code = password.charCodeAt(i);

    //A-Z ya a-z
    if ((code >= 65 && code <=90) || (code >= 97 && code <= 122)) {
        alphabet = true;
    }

    //0-9
    if (code >= 48 && code <= 57) {
        number = true;
    }
    }

if (alphabet == true && number == true && startNumber == false && password.length >= 6) {
    document.write("Valid Password: " + password);
}

//     // Final checking
if (alphabet == false) {
    document.write("Password must contain alphabets<br>");
}
else if (number == false) {
    document.write("Password must contain numbers<br>");
}
else if (startNumber == true){
    document.write("Password can not begin with a number<br>");
}
else{
    document.write("Please enter a valid password<br>"+"<br>");
}

//Q16. Write a program to convert the following string to an array using string split method. 
var university = "University of Karachi";

var arr = university.split("");

for (var i = 0; i <arr.length; i++){
    document.write(arr[i] + "<br>");
}

//Q17.Write a program to display the last character of a user input.

var userInput = "Pakistan";
var lastIndex = userInput.lastIndexOf("n");

document.write("<br>");

document.write("User input: " + userInput + "<br>");
document.write("Last Character of input: " + lastIndex + "<br>");

//Q18.You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var text = "The quick brown fox jumps over the lazy dog";

var word = "the";
var count = 0;

var word = text.toLowerCase().slice(" ");

for (var i = 0; i< word.length; i++){
    if(word[i] === word){
        count++;
    }
}
document.write("<br>");
document.write("Text: " + text + "<br>");
document.write("There are " + count + "occurrence(s) of word '" + word + "'");




