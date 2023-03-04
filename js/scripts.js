"use strict"

const displayStoredEquation = document.getElementById("displayStoredEquation");
const displayCurrentNum = document.getElementById("displayCurrentNum");
const displayScreen = document.getElementById("display");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const equalBtn = document.getElementById("equalBtn");
const pointBtn = document.querySelectorAll(".pointBtn");
let displayValue = "";
let currentOperator = "";
let storedValues = [];
let storedEquation = [];
let equationValue = 0;
let currentEquation = 0;

function addValue(number) {
    displayCurrentNum.innerHTML = displayValue += number.value;
    isDisplayFull();
};

function isDisplayFull() {
    if(displayValue.length === 16) {
        numberButtons.forEach((divs) => {
            divs.disabled = true;
        });
    } else {
        numberButtons.forEach((divs) => {
            divs.disabled = false;
        });
    };
    if (displayValue.includes(".")) {
        pointBtn.forEach((divs) => {
            divs.disabled = true;
        });
    } else {
        pointBtn.forEach((divs) => {
            divs.disabled = false;
        });
    }
};

function updateDisplay() {
    storedEquation.push(currentOperator);
    displayStoredEquation.innerHTML = storedEquation.join("");
    displayCurrentNum.innerHTML = currentEquation;
};

function pushValues() {
    storedValues.push(displayValue);
    storedEquation.push(displayValue);

}

function addOperator(operator) {
    if(currentOperator === "") {
        pushValues();
    } else {
        equalEvaluate()
    };
    currentOperator = "";
    currentOperator = operator.value;
    updateDisplay()
    displayValue = "";
    isDisplayFull();
};


function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};


function equalEvaluate(){
    pushValues();
    if (equationValue === 0){
        currentEquation = operate(currentOperator, storedValues[0], displayValue);
    } else {
        currentEquation = operate(currentOperator, equationValue, displayValue);
    };
    updateDisplay();
    equationValue = currentEquation;
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/": 
            return divide(num1, num2);
        default:
            return null;
    };
};

function deleteNum() {
    let string = displayValue;
    let result = string.slice(0, -1);
    displayCurrentNum.innerHTML = result;
    displayValue = result;
    if(displayValue === "") {
        displayCurrentNum.innerHTML = "0";
    };
    isDisplayFull();
};

window.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
        deleteNum();
    }
});

function clearCalc() {
    equationValue = 0;
    displayValue = "";
    displayCurrentNum.innerHTML = "0";
    isDisplayFull();
    storedValues = [];
    storedEquation = [];
    displayStoredEquation.innerHTML = [];
    currentOperator = "";
    currentEquation = 0;
};