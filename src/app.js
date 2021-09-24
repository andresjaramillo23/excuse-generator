/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomInt(arraySize) {
  return Math.floor(Math.random() * arraySize);
}

function nonsenseGenerator() {
  return (
    getSentence(who) +
    getSentence(action) +
    getSentence(what) +
    getSentence(when)
  );
}

function getSentence(array) {
  return array[getRandomInt(array.length)] + " ";
}

const btn = document.getElementById("b1");

btn.onclick = function() {
  var whoToBlame = document.getElementById("blameText").value;
  if (whoToBlame.length > 0) {
    who.push(whoToBlame);
  }
  document.getElementById("blameText").value = "";
  document.getElementById("excuse").innerHTML = nonsenseGenerator();
};
