const myBox = document.getElementById("myBox");

// click here is an event listener not a string parameter
myBox.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Fool!";
});

/* arrow function
myBox.addEventListener("click",  event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Fool!";
});
*/

myBox.addEventListener("mouseover", event  => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Sorry!";
})


myBox.addEventListener("mouseout", event  => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Stuped!";
})