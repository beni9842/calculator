
let displayNum = '';
let decimal = false;
const display = document.querySelector('#display');
function updateDisplay() {
    display.textContent = displayNum;
}
updateDisplay();


const numBtns = document.querySelectorAll('.number');
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        displayNum += btn.textContent;
        updateDisplay();
    });
});

const opBtns = document.querySelectorAll('.operator');
opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        displayNum = '' + operate(storedNum, Number(displayNum), op);
        updateDisplay()
        storedNum = Number(displayNum);
        op = btn.id;
        displayNum = '';
        decimal = false;
    });
});

const evalBtn = document.querySelector('#evaluate');
evalBtn.addEventListener('click', () => {
    displayNum = '' + operate(storedNum, Number(displayNum), op);
    updateDisplay();
    storedNum = Number(displayNum);
    decimal = false;
    displayNum = '';
});

const clrBtn = document.querySelector('#clear');
clrBtn.addEventListener('click', () => {
    storedNum = 0;
    op = '';
    displayNum = '';
    decimal = false;
    updateDisplay();
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    if (!decimal) {
        displayNum += '.';
        decimal = true;
        updateDisplay();
    }
});

const signBtn = document.querySelector('#sign');
signBtn.addEventListener('click', () => {
    displayNum = '' + -Number(displayNum);
    updateDisplay();
});

const percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', () => {
    displayNum = '' + Number(displayNum) / 100;
    updateDisplay();
});

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('hover');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hover');
    });
})









const add = (a, b) => a + b;
const subtract = (a, b) => add(a, -b);
const multiply = (a, b) => a * b;
const divide = (a ,b) => multiply(a, 1/b);
const raise = (b, e) => Math.pow(b, e);

let storedNum = 0;
let op = '';
// while (true) {
//     let op = prompt('enter an operator');
//     let displayedNum = getDisplayedNum();

//     storedNum = operate(storedNum, displayedNum, op);

//     alert(storedNum);
// }

function getDisplayedNum() {
    return Number(prompt('enter a number'));
}

function operate(a, b, op) {
    let operation;
    switch (op) {
        case 'add':
            operation = add;
            break;
        case 'subtract':
            operation = subtract;
            break;
        case 'multiply':
            operation = multiply;
            break;
        case 'divide':
            operation = divide;
            break;
        case 'raise':
            operation = raise;
            break;
        default:
            operation = (a, b) => b;
    }

    return operation(a, b);
}