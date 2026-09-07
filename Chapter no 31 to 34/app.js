//Q1.  Write a program that displays current date and time in your browser.
var currentDate = new Date();
alert("Enter the current data and time: " + currentDate);
document.write("Q1. Current date and time: "+ "<br>" + currentDate + "<br><br>");

//Q2. Write a program that alerts the current month in words. For example December. 
var currentMonth = currentDate.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert("Q2. Current month: " + months[currentMonth]);
document.write("Q2. Current Month: " + "<br>" + months[currentMonth] + "<br><br>");

//Q3.  Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
var currentDay = currentDate.getDay();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Q3. Current day: " + days[currentDay]);
document.write("Q3. Current Day: " + "<br>" + days[currentDay] + "<br><br>");

//Q4.  Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (days[currentDay] === "Sunday" || days[currentDay] === "Saturday") {
    alert("Q4. It's a Fun day!");
    document.write("Q4. Current Day: " + "<br>" + days[currentDay] + " It's a Fun day!" + "<br><br>");
}

//Q5.  Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
var date = currentDate.getDate();
if (date <= 16) {
    alert("Q5. First fifteen days of the month");
    document.write("Q5. Current Date: " + "<br>" + date + " It's the first fifteen days of the month!" + "<br><br>");
} else {
    alert("Q5. Last days of the month");
    document.write("Q5. Current Date: " + "<br>" + date + " It's the last days of the month!" + "<br><br>");
}

//Q6.  Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var currentDate = new Date();
var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));

document.write("Q6. Determines the minutes" + "<br><br>");
document.write("Current Date: " + "<br>" + currentDate + "<br><br>");
document.write("Elapsed milliseconds since, January . 1, 1970: "+ "<br>" + currentDate.getTime() + "<br><br>");
document.write("Elapsed minutes since, January . 1, 1970: "+ "<br>" + minutesSinceEpoch + "<br><br>");

//Q7.  Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var currentHour = currentDate.getHours();
if (currentHour < 12) {
    alert("Q7. It's AM");
    document.write("Q7. Current Hour: " + "<br>" + currentHour + " It's AM!" + "<br><br>");
} else {
    alert("Q7. It's PM");
    document.write("Q7. Current Hour: " + "<br>" + currentHour + " It's PM!" + "<br><br>");
}

//Q8.  Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31);
document.write("Q8. Last day of the last month of 2020: " + "<br>" + laterDate + "<br><br>");

//Q9.  Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? /Note: 1st Ramadan was on June 18, 2015
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate = new Date();
var daysPast = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));
alert("Q9. Days past since 1st Ramadan: " + daysPast + " days have passed since 1st Ramadan, 2015.");
document.write("Q9. Days past since 1st Ramadan: " + "<br>" + daysPast + " days have passed since 1st Ramadan, 2015." + "<br><br>");

//Q10.  Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var referenceDate = new Date();
var beginningOf2015 = new Date("January 1, 2015");

var seconds = Math.floor((referenceDate - beginningOf2015) / 1000);
document.write("Q10. Seconds elapsed between reference date and beginning of 2015: " +  "<br><br>");
document.write("On reference date: " + referenceDate + "<br>");
document.write("Seconds had passed since beginning of 2015: " + seconds + "<br><br>");

//Q11.  Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var currentDate = new Date();
var oneHourAgo = new Date();
oneHourAgo.setHours(currentDate.getHours() - 1);

document.write("Q11. Current date and time: " + "<br>" )

document.write("Date and time one hour ahead: " + "<br>" + "Current date " + currentDate + "<br>" +"1 hour ago, it was " + oneHourAgo + "<br><br>");

//Q12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var currentDate = new Date();
var hundredYearsBack = new Date();
hundredYearsBack.setFullYear(currentDate.getFullYear() - 100);

document.write("Q12. Create a date object and show the date in an alert box that is reset to 100 years back: " + "<br>");

document.write("Current Date: " + currentDate + "<br>");
document.write("Date 100 years back: " + hundredYearsBack + "<br><br>");

alert("Q12. Current Date: " + currentDate + "\nDate 100 years back: " + hundredYearsBack);

//Q13.  Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var userAge = Number(prompt("Q13.Please enter your age:"));
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
document.write("Q13. Calculate and show his birth year in your browser: " + "<br>");
document.write("Your age is " + userAge + " and your birth year is: " + birthYear + "<br><br>");

//Q14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: 
//(a). Customer Name 
//(b). Current Month
//(c). Number of units 
//(d). Charges per unit 
//(e). Net Amount Payable (within Due Date) 
//(f). Late Payment Surcharge 
//(g). Gross Amount Payable (after Due Date) 
//Where,

var customerName = prompt("Q14. Please enter your name:");
var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var unitsConsumed = Number(prompt("Q14. Please enter the number of units consumed:"));
var chargesPerUnit = 15; // Example charge per unit
var netAmount = (unitsConsumed * chargesPerUnit).toFixed(2);
var latePaymentSurcharge = 0; // Example late payment surcharge
var grossAmount = (parseFloat(netAmount) + parseFloat(latePaymentSurcharge)).toFixed(2);

document.write("Q14. K-Electric Bill: " + "<br><br>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + unitsConsumed + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable: " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable: " + grossAmount + "<br><br>");


