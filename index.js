let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
    changeBackgroundColor();
}

function appendOperation(operation) {
    displayValue += ` ${operation} `;
    updateDisplay();
    changeBackgroundColor();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
    changeBackgroundColor();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
    changeBackgroundColor();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function changeBackgroundColor() {
    const colors = ['#FFCDD2', '#C5E1A5', '#FFE082', '#BBDEFB', '#FFAB91'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.calculator').style.backgroundColor = randomColor;
}
