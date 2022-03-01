class Pet {
    // simple constructor, assigns value to the attribute
    constructor(legs) {
        this.legs = legs;
    }

    // every pet can walk
    walk() {
        console.log(`walking on ${this.legs} legs`);
    }
}

// inheritance:
class Dog extends Pet {
    // dogs will always 4 legs
    constructor() {
        super(4);
    }
    // dogs can bark, but not all pets can:
    bark() {
        console.log('bark bark!');
    }
}

let snake = new Pet(0);
snake.walk();

// when we create the dog, we don't specify how many legs there are:
let dog = new Dog();
dog.walk();
dog.bark();