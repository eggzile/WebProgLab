function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    };
}
var person1 = new Person("John", 25);
var outputElement = document.getElementById('output');
outputElement.textContent = person1.sayHello();
