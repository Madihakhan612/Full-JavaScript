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

let students = [];
let editIndex = -1;

// Add Student
document.getElementById("studentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    let student = {
        name: name,
        email: email,
        course: course
    };

    students.push(student);

    displayStudents();

    document.getElementById("studentForm").reset();

});

// Display Data
function displayStudents() {

    let data = document.getElementById("tableData");

    data.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        data.innerHTML +=
            "<tr>" +
            "<td>" + students[i].name + "</td>" +
            "<td>" + students[i].email + "</td>" +
            "<td>" + students[i].course + "</td>" +

            "<td><button onclick='editStudent(" + i + ")'>Edit</button></td>" +

            "<td><button onclick='deleteStudent(" + i + ")'>Delete</button></td>" +

            "</tr>";

    }

}

// Delete Student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();

}

// Edit Student
function editStudent(index) {

    editIndex = index;

    document.getElementById("editForm").style.display = "block";

    document.getElementById("editName").value =
        students[index].name;

    document.getElementById("editEmail").value =
        students[index].email;

    document.getElementById("editCourse").value =
        students[index].course;

}

// Update Student
function updateStudent() {

    students[editIndex].name =
        document.getElementById("editName").value;

    students[editIndex].email =
        document.getElementById("editEmail").value;

    students[editIndex].course =
        document.getElementById("editCourse").value;

    displayStudents();

    document.getElementById("editForm").style.display = "none";

}