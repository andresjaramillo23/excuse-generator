/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo");
};

function getRandomInt(arraySize) {
  return Math.floor(Math.random * (arraySize - 0) + 0);
}

function nonsenseGenerator() {
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

  var nonsenseSentence =
    who[getRandomInt(who.length)] +
    " " +
    action[getRandomInt(action.length)] +
    " " +
    what[getRandomInt(what.length)] +
    " " +
    when[getRandomInt(when.length)];

  return nonsenseSentence;
}
