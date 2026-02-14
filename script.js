const IncreaseBtn = document.getElementById("increase");
const DecreaseBtn = document.getElementById("decrease");
const ResetBtn = document.getElementById("reset"); 

const Count = document.getElementById("count");

let count = 0;

function ChangeColor(count) {
  if (count > 0) return "limegreen";
  if (count < 0) return "tomato";
  return "lightgray";
}


IncreaseBtn.addEventListener("click", function () {
    count++;
    Count.textContent = count.toString();
    
    Count.style.color = ChangeColor(count);
})

DecreaseBtn.addEventListener("click", function () {
    count--;
    Count.textContent = count.toString();
    Count.style.color = ChangeColor(count);
})

ResetBtn.addEventListener("click", function () {
    count = 0;
    Count.textContent = count.toString();
    Count.style.color = ChangeColor(count);
})