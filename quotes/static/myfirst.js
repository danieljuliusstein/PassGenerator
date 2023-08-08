const copy = document.querySelector("#copy-button");
const generate = document.querySelector("#generate-button");
let lowercase = false;
let uppercase = false;
let symbols = false;
let numbers = false;
const lowercaseList = [];
const uppercaseList = [];
const symbolsList = [];
const numbersList = [];
const emptyList = [];

window.alert(Math.floor(Math.random() * 10));

const button= document.querySelector('#button');

element.addEventListener("click", lowercase_func);
element.addEventListener("click", uppercase_func);
element.addEventListener("click", numbers_func);
element.addEventListener("click", symbols_func);

function lowercase_func() {
  window.alert("pressed");
  document.getElementById("labelTag").innerHTML = "Hello World";
}

function uppercase_func() {
  window.alert("pressed2");
}

function numbers_func() {
  window.alert("pressed3");
}

function symbols_func() {
  window.alert("pressed4");
}

function copy_func() {
  window.alert("copied!");
}

function generate_func() {
  window.alert("done");

}

