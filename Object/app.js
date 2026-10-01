//Q1.Suppose You have an array of object
let itemsArray = [
{name:"juice",price:"50", quantity:"3"},
{name:"cookie",price:"30", quantity:"9"},
{name:"shirt",price:"880", quantity:"1"},
{name:"pen",price:"100", quantity:"2"}];

let totalPrice = 0;

document.write("Q1. Array of Objects:<br>");
for (let i = 0; i < itemsArray.length; i++) {
    let item = itemsArray[i];
    let itemTotal = Number(item.price) * Number(item.quantity);

  document.write(itemsArray[i].name + " total price = " + itemTotal + "<br>");
  totalPrice += itemTotal;
}
document.write("Total price of all items: " + totalPrice + "<br><br>");

//Q2.. Create an object with properties name, email, password, age, gender, city, country. 
let user = {
    name: "Madiha Khan",
    email: "madiha@example.com",
    password: "password123",
    age: 30,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
};
document.write("Q2. User Object:<br>");
// Check if age and country properties exist in object or not
if ("age" in user) {
    document.write("Age property exists in the object.<br>");
} else {
    document.write("Age property does not exist in the object.<br>");
}

// Check if country property exists in object or not

if ("country" in user) {
    document.write("Country property exists in the object.<br>");
} else {
    document.write("Country property does not exist in the object.<br>");
}

// Check firstName properties in object
if ("firstName" in user) {
    document.write("FirstName property exists in the object.<br>");
} else {
    document.write("FirstName property does not exist in the object.<br>");
}

// Check lastName properties in objec
if ("lastName" in user) {
    document.write("LastName property exists in the object.<br>");
} else {
    document.write("LastName property does not exist in the object.<br><br>");
}

//Q3. Create a constructor function with some properties. Now create multiple records using the constructor. 

function User(name, age, email, city, country) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city;
    this.age = age;
    this.country = country;
}

let user1 = new User("Madiha Khan", 30, "madiha@example.com", "Karachi", "Pakistan");
let user2 = new User("Ali Khan", 25, "ali@example.com", "Lahore", "Pakistan");
let user3 = new User("Sara Khan", 28, "sara@example.com", "Islamabad", "Pakistan");

document.write("Q3. Constructor Function:<br>");
document.write("User 1: " + user1.name + ", " + user1.email + "<br>");
document.write("User 2: " + user2.name + ", " + user2.email + "<br>");
document.write("User 3: " + user3.name + ", " + user3.email + "<br><br>");

//Q4. Suppose you want to check population of your area, their educations and professions.  Create a constructor function which holds following properties.

document.write("Q4. Person Constructor:<br>");

function Person(name, gender, address, education, profession) {

    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;

}


// Form

let form = document.getElementById("recordForm");


// Submit

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get name

    let name = document.getElementById("name").value;


    // Get gender

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );


    if (!gender) {
        alert("Please select gender");
        return;
    }


    gender = gender.value;


    // Get address

    let address = document.getElementById("address").value;


    // Get education

    let education = document.getElementById("education").value;


    // Get profession

    let profession = document.getElementById("profession").value;


    // Create record

    let person = new Person(
        name,
        gender,
        address,
        education,
        profession
    );


    document.write("Person: " + person.name + ", " + person.email + "<br>");


    // Display record

    let records = document.getElementById("records");

    records.innerHTML +=
        "<p>" +
        "Name: " + person.name + "<br>" +
        "Gender: " + person.gender + "<br>" +
        "Address: " + person.address + "<br>" +
        "Education: " + person.education + "<br>" +
        "Profession: " + person.profession +
        "</p><hr>";


    // Clear form

    form.reset();

});

