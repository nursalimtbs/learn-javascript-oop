// static method example in JavaScript OOP
class MathUtil {
    // static method
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}

// Using the static methods without creating an instance
const sum = MathUtil.add(5, 10);
const product = MathUtil.multiply(5, 10);

console.info(`Sum: ${sum}`); // Sum: 15
console.info(`Product: ${product}`); // Product: 50