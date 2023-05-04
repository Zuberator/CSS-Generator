// if (window.location.pathname=='/account') {}

//===MENU===//

let headHeader = document.querySelector("header");
let headtop = document.getElementById("top");

window.addEventListener("load", function () {
  check();
});

window.addEventListener("resize", function () {
  check();
});

function check() {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    headtop.classList.remove("show");
  }
}

function add() {
  headtop.classList.toggle("show");
}

// ----------------------------------------------------------------------------------------------------

// COPY

let cssCode = document.getElementById("code");

function copy() {
  navigator.clipboard.writeText(code.textContent);
  alert("Copied the text: " + code.textContent);
}

// RANDOM NUMBER

function random(min, max) {
  const number = Math.random() * (max - min) + min;
  return number;
}

// RANDOM COLOR

function randomColor() {
  var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}