class Counter {
    #count = 0; // private field
    increment() {
        this.#count++;
    }
    getCount() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.info(counter.getCount()); // 2