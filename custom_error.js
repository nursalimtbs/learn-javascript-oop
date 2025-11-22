class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", "name");
    }
    if (user.age < 0) {
        throw new ValidationError("Age must be a positive number", "age");
    }
    return true;
}

try {
    const user = { name: "", age: -5 };
    validateUser(user);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation Error on field "${error.field}": ${error.message}`);
    } else {
        console.error(`Error: ${error.message}`);
    }   
}

try {
    const user = { name: "Alice", age: 30 };
    validateUser(user);
    console.info("User is valid.");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation Error on field "${error.field}": ${error.message}`);
    } else {
        console.error(`Error: ${error.message}`);
    }   
}