const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");

myButton.addEventListener("mouseover" , event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout" , event => {
    event.target.classList.remove("hover");
});


myButton.addEventListener("click" , event => {
    event.target.classList.replace("enabled" , "disabled");
});