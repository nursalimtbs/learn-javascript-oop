function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;

    // method to display person's info
    this.getInfo = function() {
        return `${this.name}, Age: ${this.age}, Country: ${this.country}`;
    };
}

const nursalim = new Person("Nursalim", 30, "Indonesia");
nursalim.sayHello = function(name) {
    return `Hello ${name}, my name is ${this.name}`;
}
console.info(nursalim);
console.info(nursalim.sayHello("Alice"));

// Adding another property to prototype
Person.prototype.greet = function() {
    return `Greetings from ${this.name}`;
};

console.info(nursalim.greet());

const alice = new Person("Alice", 28, "USA");
console.info(alice);
console.info(alice.greet());