var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
let logHistory = document.getElementById("history");
let historya = [];

let expressionData = "";
let resultData = "";
Array.prototype.forEach.call(buttons, function(button) {
button.addEventListener("click", function() {
if (button.textContent != "=" && 
button.textContent != "C" && 
button.textContent != "x" && 
button.textContent != "÷" && 
button.textContent != "√" && 
button.textContent != "x ²" && 
button.textContent != "sin" && 
button.textContent != "cos" && 
button.textContent != "tan" && 
button.textContent != "%" && 
button.textContent != "DEL" && 
button.textContent != "±" && 
button.textContent != "1/x" && 
button.textContent != "ln" && 
button.textContent != "x^" && 
button.textContent != "x !" && 
button.textContent != "π") {
  display.value += button.textContent;
  expressionData = display.value;

} else if (button.textContent === "=") {
  equals();
} else if (button.textContent === "C") {
  clear();
} else if (button.textContent === "x") {
  multiply();
} else if (button.textContent === "÷") {
  divide();
} else if (button.textContent === "±") {
  plusMinus();
} else if (button.textContent === "DEL") {
  backspace();
} else if (button.textContent === "%") {
  percent();
  expressionData += '%';
} else if (button.textContent === "π") {
  pi();
} else if (button.textContent === "x ²") {
  square();
  expressionData += '²';
} else if (button.textContent === "√") {
  squareRoot();
  expressionData = "√" + '(' + expressionData + ')';
} else if (button.textContent === "sin") {
  sin();
  expressionData = "sin" + '(' + expressionData + '°' + ')';
} else if (button.textContent === "cos") {
  cos();
  expressionData = "cos" + '(' + expressionData + '°' + ')';
} else if (button.textContent === "tan") {
  tan();
  expressionData = "tan" + '(' + expressionData + '°' + ')';
} else if (button.textContent === "1/x") {
  reverse();
  expressionData = '1/' +  expressionData
} else if (button.textContent === "ln") {
  ln();
  expressionData = "ln" + '(' + expressionData + ')';
} else if (button.textContent === "x^") {
  exponent();
} else if (button.textContent === "x !") {
  factorial();
  expressionData = expressionData + '!'
}
});
});


function syntaxError() {
if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
display.value == "Syntax Error";
}
}


function equals() {

if ((display.value).indexOf("^") > -1) {
var base = (display.value).slice(0, (display.value).indexOf("^"));
var exponent = (display.value).slice((display.value).indexOf("^") + 1);
display.value = eval("Math.pow(" + base + "," + exponent + ")");
} else {
display.value = eval(display.value)

syntaxError()
}

//  history
resultData = eval(display.value);
historya.push({
    expression: expressionData, 
    result: resultData
});
showHistory()
}

function showHistory() {
let log = ""
for (let key in historya) {
    log += historya[key].expression + " = " + historya[key].result + "<br>" + "<br>"
}
logHistory.innerHTML = log;
expressionData = display.value;
}
// let indexHistory = document.getElementsByClassName("fa-history")
// indexHistory[0].addEventListener("click", function () {
// logHistory.classList.toggle("indexHistory")
// })
function clear() {
display.value = "";
logHistory.innerHTML = ''
}

function backspace() {
display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
display.value += "*";
}

function divide() {
display.value +=  "/";
}

function plusMinus() {
if (display.value.charAt(0) === "-") {
display.value = display.value.slice(1);
} else {
display.value = "-" + display.value;
}
}

function factorial() {
var number = 1;
if (display.value === 0) {
display.value = "1";
} else if (display.value < 0) {
display.value = "undefined";
} else {
var number = 1;
for (var i = display.value; i > 0; i--) {
  number *=  i;
}
display.value = number;
}
}

function pi() {
display.value = (display.value * Math.PI);
}

function square() {
display.value = eval(display.value * display.value);
}

function squareRoot() {
display.value = Math.sqrt(display.value);
}

function percent() {
display.value = display.value / 100;
}

function reverse() {
display.value = 1/(display.value);
}
function sin() {
  display.value = Math.sin(display.value * (Math.PI/180));
}

function cos() {
  display.value = Math.cos(display.value * (Math.PI/180));
}

function tan() {
  display.value = Math.tan(display.value * (Math.PI/180));
}


function ln() {
display.value = Math.log(display.value);
}

function exponent() {
display.value += "^";
}
