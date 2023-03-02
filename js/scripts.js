"use strict"

const div = document.createElement("div");
const displayStoredEquation = document.getElementById("displayStoredEquation");
const displayCurrentNum = document.getElementById("displayCurrentNum");
const displayScreen = document.getElementById("display");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const equalBtn = document.getElementById("equalBtn");
let displayValue = "";
let currentOperator = "";
let storedValues = [];
let storedEquation = [];
let equationValue = 0;

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
    }
};

function updateDisplay() {
    storedValues.push(displayValue);
    storedEquation.push(currentOperator);
    storedEquation.push(displayValue);
    displayStoredEquation.innerHTML = storedEquation.join("");
};

function addOperator(operator) {
    updateDisplay()
    if(currentOperator === "") {

    } else {
        equalEvaluate()
    }
    currentOperator = "";
    currentOperator = operator.value;
    // displayCurrentNum.innerHTML = "0";
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
    let currentEquation;
    if (equationValue === 0){
        currentEquation = operate(currentOperator, storedValues[0], displayValue);
    } else {
        currentEquation = operate(currentOperator, equationValue, displayValue);
    }
    updateDisplay();
    displayCurrentNum.innerHTML = currentEquation;
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

function clearCalc() {
    equationValue = 0;
    displayValue = "";
    displayCurrentNum.innerHTML = "0";
    isDisplayFull();
    storedValues = [];
    storedEquation = [];
    displayStoredEquation.innerHTML = [];
    currentOperator = "";
};
