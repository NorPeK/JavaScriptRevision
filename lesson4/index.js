const countLabel = document.getElementById("countLabel");
let count = 0;

const decreaseBtn = document.getElementById("decresaeBtn").onclick = function(){
    count -= 1;
    countLabel.textContent = count;
}

const increaseBtn = document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    countLabel.textContent = count;
}

const resetBtn = document.getElementById("resetBtn").onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

