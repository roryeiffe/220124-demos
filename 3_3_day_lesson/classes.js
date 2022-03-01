class Dinosaur {
    // just like in Java, we can have a constructor that assigns attributes:
    constructor(name, diet, habitat) {
        this.name = name;
        this.diet = diet;
        this.habitat = habitat;
    }

    // use template literals to print out information about the dinosaurs
    getDescription() {
        console.log(`${this.name} is a ${this.diet} and lives in the ${this.habitat}`);
    }
    
    // static function:
    static message() {
        console.log('Dinos!');
    }
}

// use the constructor to create some dinosaurs
var dino1 = new Dinosaur('T-Rex', 'carnivore', 'forest');
var dino2 = new Dinosaur('Stegosaurus', 'herbivore', 'plains');
var dino3 = new Dinosaur('Garudimimus', 'Omnivore', 'unknown')

// call the non-static function on all objects
dino1.getDescription();
dino2.getDescription();
dino3.getDescription();
// call the static function on the class
Dinosaur.message();

// print out the dino object
console.log(dino1);