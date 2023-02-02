"use strict"

const displayNumber = document.getElementById("displayNumbers");
const numberButtons = document.querySelectorAll("numbers");
const operatorButtons = document.querySelectorAll("[data-operator]");
let displayValue = "";

numberButtons.forEach(button => {
    button.addEventListener("click", event =>{
      return displayValue.textContent = event.value;
    })
})


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