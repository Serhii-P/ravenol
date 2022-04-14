const productItem = document.getElementById("latest-content");
const productBtn = document.querySelector(".card-bottom__to-cart");
let currentElem = null;

if (screen.width < 1000) {
    productBtn.style.display = "flex";
}

productItem.onmouseover = function(event) {
if (currentElem) return;
let target = event.target.closest('.card');
if (!target) return;
if (!productItem.contains(target)) return;

currentElem = target;
currentElem.querySelector(".card-bottom__to-cart").style.display = "flex";  
};

productItem.onmouseout = function(event) {
if (!currentElem) return;

let relatedTarget = event.relatedTarget;

while (relatedTarget) {
if (relatedTarget == currentElem) return;
relatedTarget = relatedTarget.parentNode;
}

currentElem.querySelector(".card-bottom__to-cart").style.display = "none";

currentElem = null;
};