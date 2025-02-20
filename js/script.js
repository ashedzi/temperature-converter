'use strict'

const userInput = document.querySelector('.input-one');
const convert = document.querySelector('.convert');
const toFahrenheit = document.querySelector('.to-fahrenheit');
const toCelsius = document.querySelector('.to-celsius');
const result = document.querySelector('.result p');
const mode = document.querySelector('.mode')
const body = document.querySelector('body');

function clearInputs() {
    userInput.value = '';
}

// i asked ChatGPT with assistance function below because i wanted to know how to update the placeholder 
// based on the selected conversion type so as to help the user be clear on what they are converting 
function updatePlaceholder() {
    if (toFahrenheit.checked) {
        userInput.placeholder = "Enter temperature (°C)";
    } else if (toCelsius.checked) {
        userInput.placeholder = "Enter temperature (°F)";
    }
}

toFahrenheit.addEventListener('change', updatePlaceholder);
toCelsius.addEventListener('change', updatePlaceholder);

function isValidNumber(input) {
    if (input !== "" && !isNaN(input)) {
        return true;
    }

    return false;
}

function fahrenheit(input) {
    let result = (input * 9 / 5) + 32; 
    return result;
}

function celsius(input) {
    let result = (input - 32) * 5 / 9;
    return result;
}

convert.addEventListener('click', function() {
    let inputValue = userInput.value.trim();

    if (!isValidNumber(inputValue)) {
        result.innerText = 'Please, enter a valid number';
        return;
    }

    let num = parseFloat(inputValue);
    if(toFahrenheit.checked) {
        let newResult = fahrenheit(num);
        result.innerText = `${num}°C = ${newResult.toFixed(1)}°F`;

    } else if(toCelsius.checked) {
            let newResult = celsius(num);
            result.innerText = `${num}°F = ${newResult.toFixed(1)}°C`;
        } 
});

mode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
})

window.addEventListener('load', function() {
    clearInputs();
});