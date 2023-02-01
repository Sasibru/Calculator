"use strict"

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");



function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
};

function subtract(num1, num2) {
    let sum = num1 - num2;
    return sum;

};

function multiply(num1, num2) {
    let sum = num1 * num2;
    return sum;
};

function divide(num1, num2) {
    let sum = num1 / num2;
    return sum;
};

function operate(operator, num1, num2) {
    let sum = operator(num1, num2);
    return sum;
};