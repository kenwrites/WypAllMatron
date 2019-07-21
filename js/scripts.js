'use strict';

const lumpSumCalcBtn = document.querySelector("#lumpSumCalcBtn");
const lumpSumInput = document.querySelector("#lumpSumInput");
const lumpSumOutput = document.querySelector("#lumpSumOutput")

function calculateWypAll() {
    let inputValue = lumpSumInput.value;
    let inputAsInt = parseInt(inputValue);
    if (!isNaN(inputAsInt)){
        let years = Math.trunc(inputAsInt / 1000) / 10;
        lumpSumOutput.textContent = `Approximately ${years} years worth of WypAll.`;
    }
}

lumpSumCalcBtn.addEventListener('click', (event) => {
    calculateWypAll();
});

lumpSumInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13){
        event.preventDefault();
        calculateWypAll();
    }
});