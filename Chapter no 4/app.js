//Q1.Declare 3 variable in one statement.
var name = "Madiha" ,age = 23 ,city = "Karachi";

//Q2.Declare 5 legal & 5 illegal variable names.
//5 Legal variable names (examples)
var myName;
var _user;
var $price;
var user1;
var firstName;

// 5 illegal variable names (examples)
// var 1name;
// var my-name;
// var user name;
// var var;
// var @value;

//Q3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________  
document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain <b>letters, numbers, $ and _</b>.<br>");
document.write("For example: <b>$my_1stVariable</b><br><br>");

document.write("Variables must begin with a <b>letter, $ or _</b>.<br>");
document.write("For example: <b>$name, _name or name</b><br><br>");

document.write("Variable names are <b>case sensitive</b>.<br><br>");

document.write("Variable names should not be <b>JS keywords</b>.");
