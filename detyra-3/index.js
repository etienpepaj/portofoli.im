let screen = document.querySelector('.screen');

function append(value) {
    const lastChar = screen.innerText.slice(-1); // Get the last character on the screen

    if (value === '.' && lastChar.includes('.')) {
        return; // Ignore appending another decimal point
    }

    if (isOperator(value) && isOperator(lastChar)) {
        replaceOperator(value); // Replace the last operator with the new one
    } else {
        screen.innerText += value;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function replaceOperator(operator) {
    screen.innerText = screen.innerText.slice(0, -1) + operator; // Replace the last character with the new operator
}

function clearScreen() {
    screen.innerText = '';
}

function calculate() {
    let expression = screen.innerText;
    let result;
    try {
        result = eval(expression); // Evaluate the expression
        if (!Number.isFinite(result) || Number.isNaN(result)) {
            result = 'Error'; // Show "Error" for invalid calculations
        }
    } catch (error) {
        result = 'Error'; // Show "Error" for any evaluation errors
    }
    screen.innerText = result;
}