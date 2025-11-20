// create an object using object literal syntax
const nursalim = {
    name: "Nursalim",
    age: 30,
    country: "Indonesia"
};

console.info(nursalim);

const course = {
    title: "Learn JavaScript OOP",
    duration: "3 hours",
    level: "Beginner"
};

console.info(course);

// create an object using function constructor
function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;

    // method to display person's info
    this.getInfo = function() {
        return `${this.name}, Age: ${this.age}, Country: ${this.country}`;
    };
}

const person1 = new Person("Nursalim", 30, "Indonesia");
console.info(person1);
const person2 = new Person("Alice", 28, "USA");
console.info(person2);
console.info(person1.getInfo());