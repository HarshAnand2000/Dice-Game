"use strict";

const heading = document.querySelector("h1");
const diceImage1 = document.querySelector(".dice1");
const diceImage2 = document.querySelector(".dice2");
const btn = document.querySelector(".btn");

const random1 = Math.ceil(Math.random() * 6);
const random2 = Math.ceil(Math.random() * 6);

const src1 = `images/dice${random1}.png`;
const src2 = `images/dice${random2}.png`;

diceImage1.setAttribute("src", src1);
diceImage2.setAttribute("src", src2);

if (random1 > random2) {
  heading.textContent = "Player 1 Wins!";
} else if (random2 > random1) {
  heading.textContent = "Player 2 Wins!";
} else {
  heading.textContent = "Draw!";
}

btn.addEventListener("click", function () {
  location.reload();
});
