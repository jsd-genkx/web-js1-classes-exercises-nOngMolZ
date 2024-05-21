// super = keyword used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent object

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   // with the super keyword we can extend methods from the parent class
//   move(speed) {
//     console.log(`The ${this.name} moves at a speed of ${speed}kph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     // this.name = name;
//     // this.age = age;
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     // this.name = name;
//     // this.age = age;
//     this.swimSpeed = swimSpeed;
//   }
//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     // this.name = name;
//     // this.age = age;
//     this.flySpeed = flySpeed;
//   }
//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }

// // ReferenceError: Must call super constructor in derived class before accessing 'this'
// const rabbit1 = new Rabbit("rabbit1", 1, 25);
// const fish1 = new Fish("fish1", 2, 12);
// const hawk1 = new Hawk("hawk1", 4, 50);

// console.log(`Animal name is ${rabbit1.name}`);
// console.log(`Animal age is ${rabbit1.age}`);
// console.log(`Animal speed is ${rabbit1.runSpeed}`);

// // with the super keyword we can extend methods from the parent class
// fish1.swim();

class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed} km/h`);
  }
}

class Car extends Vehicle {
  constructor(name, year, driveSpeed) {
    super(name, year);
    this.driveSpeed = driveSpeed;
  }

  drive() {
    console.log(`This ${this.name} can drive`);
    super.move(this.driveSpeed);
  }
}

class Boat extends Vehicle {
  constructor(name, year, sailSpeed) {
    super(name, year);
    this.sailSpeed = sailSpeed;
  }
  
  sail() {
    console.log(`This ${this.name} can sail`);
    super.move(this.sailSpeed);
  }
}

class Plane extends Vehicle {
  constructor(name, year, flySpeed) {
    super(name, year);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}


const car1 = new Car("Toyota", 2020, 150);
const boat1 = new Boat("Yacht", 2018, 60);
const plane1 = new Plane("Boeing", 2022, 900);


console.log(`Vehicle name is ${car1.name}`);
console.log(`Vehicle year is ${car1.year}`);
console.log(`Vehicle speed is ${car1.driveSpeed}`);

car1.drive();
boat1.sail();
plane1.fly();
