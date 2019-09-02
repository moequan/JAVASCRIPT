// function Animal(name, energy) {
//     this.name = name;
//     this.energy = energy;
// }
// Animal.prototype, eat = function (amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount;
// };

// Animal.prototype.sleep = function (length) {
//     console.log(`${tjhis.name} is sleeping`);
//     this.energy += length;
// };

// const leo = new Animal(`leo`,7);
// console.log(leo)

// const snoop = new Animal(`snoop`,10);
// console.log(snoop);

// console.clear()
// class Animal {
//     constructor ( name,energy){
//         console.log(`constructor...`);
//         this.name=name;
//         this.energy=energy;
//     }
//     eat(amount){
//         console.log(`${this.name} is eating`);
//         this.energy+=amount;
//     };
//     play(length){
//         console.log(`${this.name} is playing`);
//         this.energy-=length;
//     } 
//     static nextToEat (animals){
//         const sortedLeastEnergy = animals.sort((a,b)=>{
//             return a.energy - b.energy;
//         });
//         return sortedLeastEnergy[0].name 
//     }   
//     }
//     console.log(Animal.nextToEat([leo,snoop]))

// const leo = new Animal(`leo`,7);
// console.log(leo)

// const snoop = new Animal(`snoop`,10);
// console.log(snoop);


//Static method
//Static methods are defined on the class itself and not on the prototype/object. That means you cannot call a static method on object




// Task :  Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".


class person {

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    describe(){
    console.log(`${this.name}, ${this.age} years old`);
    }
};
const personalInfo = new person(`Maurice`,25)
const personalInfo1 = new person(`Peter`,20)
personalInfo.describe()
personalInfo1.describe()