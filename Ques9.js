function generateRandomNumber() {
    var minInput = document.getElementById('minInput');
    var maxInput = document.getElementById('maxInput');
    var outputElement = document.getElementById('output');
    var min = parseInt(minInput.value, 10);
    var max = parseInt(maxInput.value, 10);
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Please enter valid minimum and maximum values.');
        return;
    }
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    outputElement.textContent = 'Random Number: ' + randomNumber;
}
