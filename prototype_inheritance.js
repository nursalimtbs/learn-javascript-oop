function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.sayHello = function() {
    return `Hello, I am Manager ${this.name}`;
};

Employee.prototype.sayHello = function() {
    return `Hello, I am Employee ${this.name}`;
}

const manager = new Manager("Nursalim");
console.info(manager);
console.info(manager.sayHello());

const employee = new Employee("Alice");
console.info(employee);
console.info(employee.sayHello());