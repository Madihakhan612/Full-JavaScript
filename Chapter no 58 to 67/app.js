//Q1. Consider you have following code snippet:
// (Copy it in your HTML file)

// i. Get element of id "main-content"
// and assign it to a variable

let mainContent = document.getElementById("main-content");

console.log("Main Content:", mainContent);


// ii. Display all child elements of "main-content"

console.log("Child Elements of main-content:");

for (let i = 0; i < mainContent.children.length; i++) {
    console.log(mainContent.children[i].outerHTML);
}


// Display child elements in browser
document.write("<h2>Child Elements of main-content:</h2>");

for (let i = 0; i < mainContent.children.length; i++) {
    document.write(mainContent.children[i].outerHTML + "<br>");
}


// iii. Get all elements of class "render"
// and show their innerHTML in browser

let renderElements = document.getElementsByClassName("render");

document.write("<h2>Render Elements:</h2>");

for (let i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>");
}


// iv. Fill input value whose element id is "first-name"

document.getElementById("first-name").value = "Alex";


// v. Repeat for "last-name" and "email"

document.getElementById("last-name").value = "Bank";

document.getElementById("email").value = "alexbank@example.com";


// ==========================================
// QUESTION 2
// ==========================================

// i. What is node type of element having id "form-content"?

let formContent = document.getElementById("form-content");

console.log("Node type of form-content:", formContent.nodeType);


// ii. Show node type of element having id "lastName"
// and its child node

let lastName = document.getElementById("lastName");

console.log("Node type of lastName:", lastName.nodeType);

console.log("Child node of lastName:", lastName.firstChild);

console.log("Child node type:", lastName.firstChild.nodeType);


// iii. Update child node of element having id "lastName"
// and its child node

lastName.firstChild.nodeValue = "Last Name: Khan";


// iv. Get first and last child of "main-content"

console.log("First child of main-content:", mainContent.firstElementChild);

console.log("Last child of main-content:", mainContent.lastElementChild);


// v. Get next and previous siblings of "lastName"

console.log("Next sibling of lastName:", lastName.nextElementSibling);

console.log("Previous sibling of lastName:", lastName.previousElementSibling);


// vi. Get parent node and node type of element having id "email"

let email = document.getElementById("email");

console.log("Parent node of email:", email.parentNode);

console.log("Parent node type:", email.parentNode.nodeType);