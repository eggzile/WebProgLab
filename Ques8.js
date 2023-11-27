function calculateSum() {
    var input = document.getElementById('numbersInput').value;
    var numbers = input.split(',').map(function (num) {
        return parseInt(num.trim(), 10);
    });
    if (numbers.some(isNaN)) {
        alert('Please enter valid numbers separated by commas.');
        return;
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var outputElement = document.getElementById('output');
    outputElement.textContent = 'The sum of numbers ' + numbers.join(', ') + ' is: ' + sum;
}
