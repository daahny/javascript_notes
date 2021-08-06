// JS can have classes, very similar to Java
class Animal {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
        return this._name;
    }

    // static methods are methods that are not available in instances of a class
    static randomAnimal() {
        animals = ['Giraffe', 'Panda', 'Leopard dog', 'Duck', 'Penguin', 'Panther'];
        return animals[Math.floor(Math.random() * animals.length)];
    }
}

class Elephant extends Animal {
    constructor(name, age) {
        super(name);
        this._age = age;
    }

    makeASound() {
        console.log('hawohwaohwhwhoooooooo');
    }
}

const eleph = new Elephant('Jeffo', 2);
console.log(eleph.name);
eleph.makeASound();
