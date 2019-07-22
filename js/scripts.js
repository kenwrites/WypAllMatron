'use strict';

const lumpSumCalcBtn = document.querySelector("#lumpSumCalcBtn");
const lumpSumInput = document.querySelector("#lumpSumInput");
const lumpSumOutput = document.querySelector("#lumpSumOutput")

function runCalculator() {
    let inputAsInt = getInputAsInt();
    if (inputIsValid(inputAsInt)){
        calculateWipes(inputAsInt)
    }
}

function calculateWipes(inputAsInteger) {
    let years = Math.trunc(inputAsInteger / 1000) / 10;
    lumpSumOutput.textContent = `Approximately ${years} years worth of wipes.`;
}

function getInputAsInt() {
    return parseInt(lumpSumInput.value);
}

function inputIsValid(input) {
    return !isNaN(input);
}

lumpSumCalcBtn.addEventListener('click', (event) => {
    runCalculator();
});

lumpSumInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13){
        event.preventDefault();
        runCalculator();
    }
});