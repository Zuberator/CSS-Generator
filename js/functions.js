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

// ----------------------------------------------------------------------------------------------------

// BORDER RADIUS

let square = document.getElementById("square");
let inputsRadius = document.querySelectorAll("[data-radius] input[type=range]");

inputsRadius.forEach((input) =>
  input.addEventListener("input", () => setBorderRadius())
);

function generateRandomBorderRadius() {
  inputsRadius[0].value = random(0, 100);
  inputsRadius[1].value = random(0, 100);
  inputsRadius[2].value = random(0, 100);
  inputsRadius[3].value = random(0, 100);
  setBorderRadius();
}

function setBorderRadius() {
  border = [];
  inputsRadius.forEach((input) => border.push(input.value + "%"));
  square.style.setProperty("border-radius", border.join(" "));
  cssCode.textContent = "border-radius: " + square.style.borderRadius;
}

// ----------------------------------------------------------------------------------------------------

// COLORS

let inputsColors = document.querySelectorAll("[data-colors-generator] input");

inputsColors.forEach((input) => {
  input.addEventListener("input", () => {
    let hue = document.getElementById("hue").value;
    let saturation = document.getElementById("sat").value;
    let lightness = document.getElementById("lig").value;
    setColor(hue, saturation, lightness);
  });
});

function generateRandomColor() {
  let hue = Math.floor(random(0, 360));
  let saturation = Math.floor(random(0, 100));
  let lightness = Math.floor(random(0, 100));
  setColor(hue, saturation, lightness);
}

function setColor(hue, saturation, lightness) {
  document.getElementById("hue").value = hue;
  document.getElementById("sat").value = saturation;
  document.getElementById("lig").value = lightness;
  let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  document.body.style.setProperty("background", color);
  code.textContent = "background: " + color;
}

// ----------------------------------------------------------------------------------------------------

// BOX SHADOW

let inputsBoxShadow = document.querySelectorAll("[data-box-shadow] input");

inputsBoxShadow.forEach((input) => {
  input.addEventListener("input", () => {
    setBoxShadow(
      document.getElementById("horizontal").value,
      document.getElementById("vertical").value,
      document.getElementById("blur").value,
      document.getElementById("spread").value,
      document.getElementById("color").value
    );
  });
});

function generateRandomBoxShadow() {
  document.getElementById("horizontal").value = random(-100, 100);
  document.getElementById("vertical").value = random(-100, 100);
  document.getElementById("blur").value = random(0, 100);
  document.getElementById("spread").value = random(0, 100);
  document.getElementById("color").value = randomColor();
  setBoxShadow(
    document.getElementById("horizontal").value,
    document.getElementById("vertical").value,
    document.getElementById("blur").value,
    document.getElementById("spread").value,
    document.getElementById("color").value
  );
}

function setBoxShadow(horizontal, vertical, blur, spread, color) {
  if (document.getElementById("inset").checked == true) {
    inset = "inset";
  } else {
    inset = "";
  }
  let boxShadow = `${color} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${inset}`;
  square.style.setProperty("box-shadow", boxShadow);
  cssCode.textContent = "box-shadow: " + square.style.boxShadow;
}

// ----------------------------------------------------------------------------------------------------

// TEXT SHADOW

let inputsTextShadow = document.querySelectorAll("[data-text-shadow] input");

inputsTextShadow.forEach((input) => {
  input.addEventListener("input", () => setTextShadow());
});

function generateRandomTextShadow() {
  inputsTextShadow[0].value = random(-100, 100);
  inputsTextShadow[1].value = random(-100, 100);
  inputsTextShadow[2].value = random(0, 20);
  inputsTextShadow[3].value = randomColor();
  setTextShadow();
}

function setTextShadow() {
  shadow = [];
  inputsTextShadow.forEach((input) => shadow.push(input.value));
  square.style.setProperty("text-shadow", shadow.join("px "));
  cssCode.textContent = "text-shadow: " + square.style.textShadow;
}

// ----------------------------------------------------------------------------------------------------

// GRADIENT

let controlsGradient = document.querySelector("[data-gradient-generator]");
let inputsGradient = document.querySelectorAll(
  "[data-gradient-generator] input"
);
let colors = document.querySelectorAll(
  "[data-gradient-generator] input[type=color]"
);
let degree = 0;

document.body.addEventListener("input", (e) => {
  if (e.target && e.target.matches("[data-gradient-generator] input")) {
    setGradient(document.getElementById("degree").value);
  }
});

function generateRandomGradient() {
  colors.forEach((colorInput) => (colorInput.value = randomColor()));
  degree = document.getElementById("degree").value = Math.floor(random(0, 360));
  setGradient(degree);
}

function setGradient(degree) {
  color = [];
  colors.forEach((colorInput) => color.push(colorInput.value));

  let gradient = `${degree}deg, ${color}`;
  square.style.setProperty("background", `linear-gradient(${gradient})`);
  cssCode.textContent = "background: " + square.style.background;
}

function addColorInput() {
  let colorInputSpan = document.createElement("span");
  colorInputSpan.textContent = `Color ${colors.length + 1}`;
  let colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.id = `color-${colors.length + 1}`;
  controlsGradient.children[
    controlsGradient.children.length - 4
  ].insertAdjacentElement("afterEnd", colorInputSpan);
  controlsGradient.children[
    controlsGradient.children.length - 4
  ].insertAdjacentElement("afterEnd", colorInput);

  inputsGradient = document.querySelectorAll("[data-gradient-generator] input");
  colors = document.querySelectorAll(
    "[data-gradient-generator] input[type=color]"
  );
  setGradient(degree);
}

// ----------------------------------------------------------------------------------------------------

// TRANSFORM

let inputsTransform = document.querySelectorAll("[data-transform] input");

inputsTransform.forEach((input) => {
  input.addEventListener("input", (e) => {
    setTransform();
  });
});

function generateRandomTransform() {
  inputsTransform.forEach((input) => {
    input.value = random(+input.min, +input.max);
  });
  setTransform();
}

function setTransform() {
  let valuesTransform = [];
  inputsTransform.forEach((input) => {
    if (
      (input.id != "scaleX" && input.id != "scaleY" && input.value != "0") ||
      ((input.id == "scaleX" || input.id == "scaleY") && input.value != "1")
    ) {
      valuesTransform.push(
        input.id + "(" + input.value + input.dataset.unit + ") "
      );
    }
  });
  square.style.setProperty("transform", valuesTransform.join(" "));
  cssCode.textContent = "transform: " + square.style.transform;
}

// let inputsTransform = document.querySelectorAll("[data-transform] input");
// let valuesTransform = [];

// const styles = [
//   { Name: "translateX", Value: "0", Unit: "px", Draw: `random(-100, 100)` },
//   { Name: "translateY", Value: "0", Unit: "px", Draw: `random(-100, 100)` },
//   { Name: "rotateX", Value: "0", Unit: "deg", Draw: `random(-100, 100)` },
//   { Name: "rotateY", Value: "0", Unit: "deg", Draw: `random(-100, 100)` },
//   { Name: "rotateZ", Value: "0", Unit: "deg", Draw: `random(-100, 100)` },
//   { Name: "skewX", Value: "0", Unit: "deg", Draw: `random(-5, 5)` },
//   { Name: "skewY", Value: "0", Unit: "deg", Draw: `random(-5, 5)` },
//   { Name: "scaleX", Value: "0", Unit: "", Draw: `random(5, 15) / 10` },
//   { Name: "scaleY", Value: "0", Unit: "", Draw: `random(5, 15) / 10` },
// ];

// inputsTransform.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     styles.find((x) => x.Name == e.target.id).Value = e.target.value;
//     styles.forEach((style) => {
//       if (style.Value != "0") {
//         valuesTransform.push(`${style.Name}(${style.Value + style.Unit})`);
//       }
//     });
//     setTransform();
//   });
// });

// function generateRandomTransform() {
//   styles.forEach((style, index) => {
//     style.Value = eval(style.Draw);
//     inputsTransform[index].value = style.Value;
//     valuesTransform.push(`${style.Name}(${style.Value + style.Unit})`);
//   });
//   setTransform();
// }

// function setTransform() {
//   square.style.setProperty("transform", valuesTransform.join(" "));
//   cssCode.textContent = "transform: " + square.style.transform;
//   valuesTransform = [];
// }

// ----------------------------------------------------------------------------------------------------

// FLEXBOX

let selectFlexbox = document.querySelectorAll("select");
let selectFlexboxParent = document.querySelectorAll("[data-square]");
let selectFlexboxChildren = document.querySelectorAll("[data-small-square]");
let smallSquaresBox = document.querySelector("#square");

selectFlexbox.forEach((select) => {
  select.addEventListener("input", () => {
    setFlexbox();
  });
});

function addSquare() {
  let smallSquare = document.createElement("div");
  smallSquare.id = "small-square";
  smallSquaresBox.appendChild(smallSquare);
}

function generateRandomFlexbox() {
  selectFlexbox.forEach((select) => {
    select.value =
      select.options[Math.floor(random(0, select.options.length))].value;
  });
  setFlexbox();
}

setFlexbox();

function setFlexbox() {
  let valuesFlexboxParent = [];
  let valuesFlexboxChildren = [];

  selectFlexboxParent.forEach((select) => {
    if (select.value != "") valuesFlexboxParent.push(select.value);
  });

  selectFlexboxChildren.forEach((select) => {
    if (select.value != "") valuesFlexboxChildren.push(select.value);
  });

  square.setAttribute("style", valuesFlexboxParent.join("; "));
  smallSquaresBox.children[0].setAttribute(
    "style",
    valuesFlexboxChildren.join("; ")
  );
  cssCode.textContent = square.getAttribute("style");
}

// ----------------------------------------------------------------------------------------------------

// GRID

let selectGrid = document.querySelectorAll("select");
let selectGridParent = document.querySelectorAll("[data-square]");
let selectGridChildren = document.querySelectorAll("[data-small-square]");
// let smallSquaresBox = document.querySelector("#square");

selectGrid.forEach((select) => {
  select.addEventListener("input", () => {
    setGrid();
  });
});

function generateRandomGrid() {
  selectGrid.forEach((select) => {
    select.value =
      select.options[Math.floor(random(0, select.options.length))].value;
  });
  setGrid();
}

setGrid();

function setGrid() {
  let valuesGridBig = [];
  let valuesGridSmall = [];

  selectGridParent.forEach((select) => {
    if (select.value != "") valuesGridBig.push(select.value);
  });

  selectGridChildren.forEach((select) => {
    if (select.value != "") valuesGridSmall.push(select.value);
  });

  square.setAttribute("style", valuesGridBig.join("; "));
  smallSquaresBox.children[0].setAttribute(
    "style",
    valuesGridSmall.join("; ")
  );
  cssCode.textContent = square.getAttribute("style");
}
