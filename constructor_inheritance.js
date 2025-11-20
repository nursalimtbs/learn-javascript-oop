function Employee(fullName) {
    this.fullName = fullName;
}

function Manager(fullName, department) {
    Employee.call(this, fullName); // Inherit properties from Employee
    this.department = department;
}