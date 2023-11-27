function convertLength() {
    var lengthInput = document.getElementById('lengthInput').value;
    var unitSelect = document.getElementById('unitSelect');
    var outputElement = document.getElementById('output');
    var length = parseFloat(lengthInput);
    var unit = unitSelect.value;
    if (isNaN(length)) {
        alert('Please enter a valid number for length.');
        return;
    }
    var convertedLength = 0;
    if (unit === 'meters') {
        convertedLength = length * 3.28084; // Convert meters to feet
        outputElement.textContent = length + ' meters is approximately ' + convertedLength.toFixed(2) + ' feet.';
    } else if (unit === 'feet') {
        convertedLength = length / 3.28084; // Convert feet to meters
        outputElement.textContent = length + ' feet is approximately ' + convertedLength.toFixed(2) + ' meters.';
    }
}
