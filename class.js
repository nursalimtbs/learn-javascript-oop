class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    greetings(name) {
        return `Hello ${name}, my name is ${this.name}`;
    }
}

const nursalim = new Person("Nursalim", 30, "Indonesia");
console.info(nursalim);
console.info(`Name: ${nursalim.name}, Age: ${nursalim.age}, Country: ${nursalim.country}`);
console.info(nursalim.greetings("Alice"));