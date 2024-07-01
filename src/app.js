/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Al final dejé un botón para poder generar todas las opciones posibles.

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function randomNumber(array) {
    let random = Math.floor(Math.random() * array.length);
    return random;
  }

  function generateExcuse() {
    let randomWho = who[randomNumber(who)];
    let randomAction = action[randomNumber(action)];
    let randomWhat = what[randomNumber(what)];
    let randomWhen = when[randomNumber(when)];

    console.log(randomAction);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  console.log(who[randomNumber(who)]);
  let excuse = document.getElementById("excuse");

  const btn = document.getElementById("generate");

  btn.onclick = () => {
    excuse.innerHTML += generateExcuse() + "<br>";
  };
};
