class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // setter for fullName
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

const person = new Person("Nursalim", "Khalid", 30);
console.info(person.fullName); // using getter  

person.fullName = "Alice Johnson"; // using setter
console.info(person.fullName); // using getter