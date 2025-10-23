const display = document.querySelector('.display');
let currentInput = '';
let currentOperation = '';
let firstOperand = null;

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperation !== '') {
            evaluate();
        }
        firstOperand = currentInput;
        currentOperation = button.textContent;
        currentInput = '';
    });
});

document.querySelector('.equals').addEventListener('click', evaluate);

document.querySelector('.clear').addEventListener('click', () => {
    currentInput = '';
    currentOperation = '';
    firstOperand = null;
    display.textContent = '0';
});

function evaluate() {
    if (currentInput !== '' && firstOperand !== null) {
        let result = null;
        switch (currentOperation) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(currentInput);
                break;
            default:
                return;
        }
        display.textContent = result;
        currentInput = result.toString();
        currentOperation = '';
        firstOperand = null;
    }
}