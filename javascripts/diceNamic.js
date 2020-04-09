// jshint esversion: 7

//define helper functions here


let rollDie = () => {
  return Math.floor (Math.random() * 6) + 1;
};

let controller = () => {
  let target, die1, die2, rollCount = 0, die1URL, die2URL, imgElem1, imgElem2, cheeryMsg;

target = document.querySelector("input").value;
console.log(target);

do {
  //roll the dice
die1 = rollDie();
die2 = rollDie();

  //increment the roll counter
rollCount += 1;

  //log the dice and the counter
console.log(die1, die2, rollCount);

} while((die1 + die2) != target);

//update images on web page
die1URL = `images/die${die1}.gif`;
imgElem1 = document.querySelector("img");
imgElem1.setAttribute("src", die1URL);

die2URL = `images/die${die2}.gif`;
imgElem2 = document.querySelectorAll("img")[1];
imgElem2.setAttribute("src", die2URL);

//display number of rolls on the web page
singleMsg = `You hit your number in 1 roll!`;
cheeryMsg = `You hit your number in ${rollCount} rolls!`;
if (rollCount == 1){
  console.log(singleMsg);
  document.querySelector("div").innerHTML = singleMsg;
}

if (rollCount >= 2){
  console.log(cheeryMsg);
  document.querySelector("div").innerHTML = cheeryMsg;
}

document.querySelector("div").innerHTML = cheeryMsg;

};


function pizzaPSI (cost, diam) {
  //your code from P2 goes here
}

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
