let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function calculateResult() {
  try {
    let result = eval(displayValue);
    if (isNaN(result) || !isFinite(result)) {
      throw "Invalid expression";
    }
    document.getElementById('display').innerText = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').innerText = 'Error';
    displayValue = '';
  }
}
