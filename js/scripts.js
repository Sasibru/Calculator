"use strict"

const div = document.createElement("div");
const displayStoredValues = document.getElementById("displayStoredValues");
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
}

function addOperator(operator) {
    currentOperator = "";
    currentOperator = operator.value;
    storedValues.push(displayValue);
    storedEquation.push(displayValue);
    displayCurrentNum.innerHTML = "0";
    displayValue = "";
    storedEquation.push(currentOperator);
    displayStoredValues.innerHTML = storedEquation.join("");
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

let testOperate = "";

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            return null;
    };
    return testOperate;
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
    displayValue = "";
    displayCurrentNum.innerHTML = "0";
    isDisplayFull();
    storedValues = [];
    storedEquation = [];
    displayStoredValues.innerHTML = [];
};