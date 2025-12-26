// ES6 Class Example
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

// Inheritance
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.Model = mod;
    }

    show() {
        return this.present() + ', it is a' + this.Model
    }
}

// Usage
const mycar = new Car("Ford", "Mustang");
mycar.show();