"use strict"

const div = document.createElement("div");
const displayNumber = document.getElementById("displayNumbers");
const displayScreen = document.getElementById("display");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
let displayValue = "";
let currentOperator = "";

function addValue(number) {
    displayNumber.innerHTML = displayValue += number.value;
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
};

function deleteNum() {
    let string = displayValue;
    let result = string.slice(0, -1);
    displayNumber.innerHTML = result;
    displayValue = result;
    if(displayValue === "") {
        displayNumber.innerHTML = "0";
    };
    isDisplayFull();
};

function clearCalc() {
    displayValue = "";
    displayNumber.innerHTML = "0";
    isDisplayFull();
};