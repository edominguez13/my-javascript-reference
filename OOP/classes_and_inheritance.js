class Bird {
    constructor(mainEnvironment) {
        this.mainEnvironment = mainEnvironment;
    }
    useWings() {
        console.log("Flying!")
    }
}

class Eagle extends Bird {
    constructor(mainEnvironment, eatsFruit){
        super(mainEnvironment); // Inheriting constructor attributes
        this.eatsFruit = eatsFruit;
    }


    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {

    useWings() {
        console.log("Diving!")
    }
}

var baldEagle = new Eagle('mountain', false);
var kingPenguin = new Penguin('iceland');

baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

console.log(baldEagle);
console.log(kingPenguin);
