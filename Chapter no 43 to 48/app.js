//Q1.Show an alert box on click on a link. 
let links = document.querySelector("#link");
links.addEventListener("click", function () {
    alert("You clicked on the link");
})

//Q2.Display some Mobile images in browser. On click on an image Show the message in alert to user.

let phone = document.querySelectorAll(".Mobile");

for (let i = 0; i < phone.length; i++) {
phone[i].addEventListener("click", function () {
    alert("Thanks for purchasing a phone from us");
    })
}

//Q3.Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.  
let buttons = document.querySelectorAll("button")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
    buttons[i].parentNode.parentNode.remove()
    })
}

//Q4.Display an image in browser. Change the picture on mouseover and set the first picture on mouseout. 

function changeImage(e) {
console.log(e.target.src)
e.target.src ="./images/car.jpg";
}

function previousImage(e) {
console.log(e.target.src)
e.target.src = "./images/bike.jpg";
}

document.write="<br>"
//Q5.Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser. 

let count = 0;

        document.querySelector("#increase").addEventListener("click", function () {

            count = count + 1;

            document.querySelector("#counter").textContent = count;

        });


        document.querySelector("#decrease").addEventListener("click", function () {

            count = count - 1;

            document.querySelector("#counter").textContent = count;

        });