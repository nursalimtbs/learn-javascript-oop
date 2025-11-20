class Employee {
    constructor(fullName) {
        this.fullName = fullName;
    }

    greetings(name) {
        return `Hello ${name}, I am Employee ${this.fullName}`;
    }
}

class Manager extends Employee {
    constructor(fullName, department) {
        super(fullName); // Inherit properties from Employee
        this.department = department;
    }

    greetings(name) {
        return `Hello ${name}, I am Manager ${this.fullName} from ${this.department} department`;
    }
}

const manager = new Manager("Nursalim", "IT");
console.info(manager);
console.info(manager.greetings("Alice"));