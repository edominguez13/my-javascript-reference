//////// Class
class LivingThing {
    constructor(breathesUnderwater) {
        this.breathesUnderwater = breathesUnderwater;
    }

    stayUnderWater() {
        if (this.breathesUnderwater) {
            console.log('No problem underwater');
        } else {
            console.log('Dies');
        }
    }
}

//////// Class instances -> objects
const fish = new LivingThing(true); // giving parameters to the constructors
const human = new LivingThing(false);

//////// Calling objects mehtods
fish.stayUnderWater();
human.stayUnderWater();

