class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log('beep!');
    }

    toString() {
        return `The vechile is ${this.make} ${this.model} from ${this.year}.`;    
    }
}
class Car extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numOfwheels = 4
        
    }
    
}
class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numOfwheels = 2;
    }
    revEngine(){
        return "Vroooommm!";
    }

}
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity =capacity;
    }
add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
        return "Only Vehicles Are Allowed In Here!!"
    }
    if (this.vehicles.length >= this.capacity) {
        return "Sorryn We're Fill";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle Added!";
}

}