//Q1. Create a signup form and display form data in your web page on submission. 
let form = document.getElementById("signupForm")

form.addEventListener("submit",function(event){
    event.preventDefault()
})
let firstName = document.getElementById("firstName").Value

let lastName = document.getElementById("lastName").Value

let email = document.getElementById("email").Value

let passWord = document.getElementById("password").Value

document.getElementById("result").innerHTML 


//Q2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that prticlar item will be displayed.  
let button = document.getElementById("readMore")
let moreText = document.getElementById("moreText")
button.addEventListener("click", function(){

    if (moreText.style.display === "none"){
        moreText.style.display = "block";
    
        button.innerHTML ="Read Less";
    }
    else{
        moreText.style.display = "none";
        button.innerHTML ="Read More";
    }
});
//Q3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.
  