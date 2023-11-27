function showAlert() {
    window.alert("Hello, this is an alert!");
    document.body.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
