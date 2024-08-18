let buttons = document.querySelectorAll(".myButtons")
console.log(buttons);



const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);
console.log(buttons); // the new button is not appended to the nodelist


buttons = document.querySelectorAll(".myButtons"); // to handle the newly added button
console.log(buttons);


buttons.forEach(element => {
    element.style.backgroundColor = "green";
    element.textContent += " Yo";
});

buttons.forEach(element => {
    element.addEventListener("click" , event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(element => {
    element.addEventListener("mouseover" , event => {
        event.target.style.backgroundColor = "yellow";
    })
});

buttons.forEach(element => {
    element.addEventListener("mouseout" , event => {
        event.target.style.backgroundColor = "black";
    })
});


buttons.forEach(element => {
    element.addEventListener("click" , event => {
        event.target.remove();
    })
});