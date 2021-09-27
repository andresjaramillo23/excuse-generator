/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo");
};

document.onload = function() {};

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

const enteredWords = new Array();

function getRandomInt(arraySize) {
  return Math.floor(Math.random() * arraySize);
}

function nonsenseGenerator() {
  const sentence = [];
  let sentences = [who, action, what, when];

  for (let i = 0; i < sentences.length; i++)
    sentence[i] = getSentence(sentences[i]);

  return sentence;
}

function getSentence(array) {
  return array[getRandomInt(array.length)];
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

function setSentencesInHtml() {
  let sentenceGenerated = nonsenseGenerator();

  const sentencesToValues = new Map();
  sentencesToValues.set("who", 0);
  sentencesToValues.set("action", 1);
  sentencesToValues.set("what", 2);
  sentencesToValues.set("when", 3);

  for (let [key, value] of sentencesToValues.entries()) {
    let valuesMatched = false;
    for (let t = 0; t < enteredWords.length; t++) {
      if (
        sentenceGenerated[value].toUpperCase() == enteredWords[t].toUpperCase()
      )
        valuesMatched = true;
    }

    if (valuesMatched)
      document.getElementById(key).style.textDecoration = "underline";
    else document.getElementById(key).style.textDecoration = "none";

    document.getElementById(key).innerHTML = sentenceGenerated[value];
  }
}

function resetInputValues() {
  document.getElementById("inputWord").value = "";
  document.getElementsByName("myWordsList")[0].value = "";
}

function populateSentencesWithNewInput(valueInput, keyInput) {
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
}

btn.onclick = function() {
  let valueInput = document.getElementById("inputWord").value;
  if (valueInput.length > 0) enteredWords.push(valueInput);

  console.log(enteredWords);
  let keyInput = document.getElementsByName("myWordsList")[0].value;

  populateSentencesWithNewInput(valueInput, keyInput);

  resetInputValues();
  setSentencesInHtml();
};
