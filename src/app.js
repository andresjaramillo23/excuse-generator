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

function isAlreadyThere(array, word) {
  let isAlready = false;
  for (let j = 0; j < array.length; j++) {
    let wordFromArray = array[j];
    if (word.toUpperCase() == wordFromArray.toUpperCase()) isAlready = true;
  }
  return isAlready;
}

const btn = document.getElementById("b1");

btn.onclick = function() {
  let valueInput = document.getElementById("blameText").value;
  let keyInput = document.getElementsByName("myBrowser")[0].value;
  if (valueInput.length > 0) {
    switch (keyInput) {
      case "Who":
        if (!isAlreadyThere(who, valueInput)) who.push(valueInput);
        break;
      case "Action":
        if (!isAlreadyThere(action, valueInput)) action.push(valueInput);
        break;
      case "What":
        if (!isAlreadyThere(what, valueInput)) what.push(valueInput);
        break;
      case "When":
        if (!isAlreadyThere(when, valueInput)) when.push(valueInput);
        break;
    }
  }

  document.getElementById("blameText").value = "";
  document.getElementsByName("myBrowser")[0].value = "";
  document.getElementById("excuse").innerHTML = nonsenseGenerator();
};
