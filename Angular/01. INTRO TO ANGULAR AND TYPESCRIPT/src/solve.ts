class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} says hi!`;
    }
}

const p = new Person('Pesho');
console.log(p.sayHello());