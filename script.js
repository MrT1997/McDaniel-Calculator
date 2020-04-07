const firstNumber = document.getElementById("first");
const secondNumber = document.getElementById("second");
const mathSymbol = document.getElementById("math-symbol");
const result = document.getElementById("result");

function addNumbers(first, second) {
    var sum = +first.value + +second.value;
    result.value = sum;
}

function subtractNumbers(first, second) {
    var diff = first.value - second.value;
    result.value = diff;
}

function multiplyNumbers(first, second) {
    var mult = first.value * second.value;
    result.value = mult;
}

function divideNumbers(first, second) {
    var divide = first.value / second.value;
    result.value = divide;
}

function performCalculation(symbol, num1, num2) {
    if (symbol.value == "+") {
        addNumbers(num1, num2);
    } else if (symbol.value == "-") {
        subtractNumbers(num1, num2);
    } else if (symbol.value == "*") {
        multiplyNumbers(num1, num2);
    } else if (symbol.value == "/") {
        divideNumbers(num1, num2);
    } else {
        alert("Incorrect symbol");
    }
}

function reset() {
    firstNumber.value = null;
    secondNumber.value = null;
    mathSymbol.value = null;
    result.value = null;
}