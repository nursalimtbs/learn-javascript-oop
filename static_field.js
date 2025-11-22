class Environment {
    static OS = "Windows";
    static BROWSER = "Chrome";
    static VERSION = "1.0.0";

    static getEnvironmentInfo() {
        return `OS: ${this.OS}, Browser: ${this.BROWSER}, Version: ${this.VERSION}`;
    }
}

console.info(Environment.getEnvironmentInfo()); // OS: Windows, Browser: Chrome, Version: 1.0.0
console.info(Environment.OS); // Windows
console.info(Environment.BROWSER); // Chrome
console.info(Environment.VERSION); // 1.0.0