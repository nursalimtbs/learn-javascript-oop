class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    // private method
    #getSecret() {
        return `This is a secret for ${this.name}`;
    }

    revealSecret() {
        return this.#getSecret();
    }

}

const nursalim = new Person("Nursalim", 30, "Indonesia");
console.info(nursalim);
console.info(nursalim.revealSecret());
// console.info(nursalim.#getSecret()); // This will throw an error