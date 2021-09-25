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
  let sentence = "";
  let sentences = [who, action, what, when];

  for (let i = 0; i < sentences.length; i++)
    sentence += getSentence(sentences[i]);

  return sentence;
}

function getSentence(array) {
  return array[getRandomInt(array.length)] + " ";
}

function isAlreadyThere(word) {
  let isAlready = false;
  for (let j = 0; j < who.length; j++) {
    let wordFromArray = who[j];
    if (word.toUpperCase() == wordFromArray.toUpperCase()) isAlready = true;
  }
  return isAlready;
}

const btn = document.getElementById("b1");

btn.onclick = function() {
  var whoToBlame = document.getElementById("blameText").value;
  if (whoToBlame.length > 0 && !isAlreadyThere(whoToBlame))
    who.push(whoToBlame);

  document.getElementById("blameText").value = "";
  document.getElementById("excuse").innerHTML = nonsenseGenerator();
};
