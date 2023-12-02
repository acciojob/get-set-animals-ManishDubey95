//complete this code
class Animal {
    _species;
    
    constructor(species) {
        this._species = species;
    }

    get Species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${Species} makes a sound`);
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
