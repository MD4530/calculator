'use strict';
let result;

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('submitButton')
            .addEventListener('click', calculator);
    });

}

function calculator() {
    let operation = document.getElementById('operation').value;
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let output = document.getElementById('result');

    if (operation === 'add') {
        output.textContent = add(firstNumber, secondNumber);

    } else if (operation === 'subtract') {
        output.textContent = subtract(firstNumber, secondNumber);

    } else if (operation === 'multiple') {
        output.textContent = multiple(firstNumber, secondNumber);

    } else if (operation === 'divide') {
        output.textContent = divide(firstNumber, secondNumber);

    } else {
        alert('Invalid Operation');
    }
}


function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    return result;
}

function subtract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    return result;
}

function multiple(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    return result;
}

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    return result;
}


main();