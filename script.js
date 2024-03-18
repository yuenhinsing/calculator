// JavaScript variables for DOM nodes
const display = document.querySelector('.display')
const mainOperators = document.querySelectorAll(".mainOperator");
const decimalBtn = document.querySelector("#decimal");
const equalsBtn = document.querySelector("#equalsBtn");
const clearBtn = document.querySelector("#clearBtn");
const digits = document.querySelectorAll(".digit")

// declare empty variables to store results
let firstNum;
let secondNum;
let operation;
let lastClickIsOperand = 0;
let lastClickIsNumber = 0;
let clearAll;

// add event listeners to digits
digits.forEach((digit) => {
    digit.addEventListener('click',function(){
        if (!lastClickIsNumber) {
            display.textContent = ""; /* reset display if !lastClickIsNumber */
        }
        display.textContent += digit.textContent;
        lastClickIsNumber = 1;
        lastClickIsOperand = 0;
    });
    });

// add event listener to "."
decimalBtn.addEventListener('click',()=>{
    if (!display.textContent.includes(".")){
        display.textContent += ".";
    }
})

// add event listeners to operators
mainOperators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (operation === undefined){
            firstNum = display.textContent;
        } 
        lastClickIsOperand = 1;
        lastClickIsNumber = 0;
        operation = e.target.textContent;
    })
})

// add event listener to equal
equalsBtn.addEventListener("click", () => {
    secondNum = display.textContent;
    display.textContent = parseFloat(calculate(firstNum, secondNum, operation).toFixed(4));
    firstNum = display.textContent;
    lastClickIsOperand = 0;
    lastClickIsNumber = 0;
    operation = undefined;
})

// clear and clear all
clearBtn.addEventListener("click", () =>{
    if (clearAll === 1) {
        firstNum = 0;
        operation = undefined;
        lastClickIsNumber = 0;
        lastClickIsOperand = 0;
        display.textContent = "";
        clearBtn.innerText = "Clear";
        clearAll = 0;
    } else {
        display.textContent = "";
        clearAll = 1;
        clearBtn.innerText = "Clear All";
    }
})

/* the main function for calculation */
function calculate(firstNum, secondNum, operation){
    firstNum = +firstNum;
    secondNum = +secondNum;
    if (operation == "/" && secondNum === 0) {
        alert("ERROR");
        display.textContent = "";
        operation = undefined;
    } else {
    switch (operation){
        case "+":
            return firstNum + secondNum;
            break;
        case "-":
            return firstNum - secondNum;
            break;
        case "*":
            return firstNum * secondNum;
            break;
        case "/":
            return firstNum / secondNum;
            break;
    }};
};