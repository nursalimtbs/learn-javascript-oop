class MathUtil {
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

console.info(MathUtil.divide(10, 2)); // 5

// catching the error
try {
    console.info(MathUtil.divide(10, 0));
} catch (error) {
    console.error(error.message); // Division by zero is not allowed.
} finally {
    console.info("Execution completed.");
}

// finally block example without error
class Counter {
    constructor() {
        this.count = 1;
    }

    next() {
        try {
            return this.count;
        } finally {
            this.count++;
        }
    }
}

const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());