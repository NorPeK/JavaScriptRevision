// Create the element

const newH1 = document.createElement("h1");

// Add attributes/properties

newH1.textContent = "I like Pizza";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";




// Append elements to DOM

//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1 , box2);
const boxes = document.querySelectorAll(".box"); // class box
document.body.insertBefore(newH1, boxes[3]); //newELement, currentElement

