class Employee {

}

class Manager {

}

class CTO extends Employee {

}

const nursalim = new Manager();
const alice = new Employee();
console.info(nursalim instanceof Manager);
console.info(nursalim instanceof Employee);
console.info(nursalim instanceof Object);

console.info(alice instanceof Employee);
console.info(alice instanceof Manager);
console.info(alice instanceof Object);

const cto = new CTO();
console.info(cto instanceof CTO);
console.info(cto instanceof Employee);
console.info(cto instanceof Manager);
console.info(cto instanceof Object);