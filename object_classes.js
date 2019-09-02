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


// class person {

//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     describe(){
//     console.log(`${this.name}, ${this.age} years old`);
//     }
// };
// const personalInfo = new person(`Maurice`,25)
// const personalInfo1 = new person(`Peter`,20)
// personalInfo.describe()
// personalInfo1.describe()


// Task :
// Create a class called Student which accepts the name of a student as string, and his/ her class name as string.
// The Student class should have the following methods
// fullName : John Doe
// address  : vulkenstr 1, 2341, Berlin
// Subjects : return all the subjects which currently studying like ‘Web’, ‘Math’, ‘Science’ etc
// birthDate : need to pass the year and store this year in this object’s property birthDate.
// age: it will return the age of the student, you no need to pass anything in this method but birthDate will take from previously stored from the object property.
// console.clear()
// class Student {
//     constructor(fullName, className, address, subjects, birthDate) {

//         this.className = className;
//         this.address = address;
//         this.fullName = fullName;
//         this.subjects = subjects;
//         this.birthDate = new Date(birthDate);
//     }
//     age() {
//         this.age = (2019 - this.birthDate.getFullYear());
//         return this.age;
//     }
// };
// const currentAge = new Student(`Maurice Schubarth`, `FbW15`, `vulkanstr 1 2341 Berlin`, `Web,Math,Data`, `1993-9-15`);
// console.log(currentAge.age());
// console.log(currentAge)


//Create Class validateCreditCard and constructor accept the card number.
//Class contain one method validate and it decide card number is valid or not.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

class ValidateCreditCard {
    constructor(num) {
        this.num = num;
    }
    checkTheNumber(check) {
        var num = parseFloat(check)
        
        for (var i = 0; i < check.length; i++) {
            if (check.length == 16 && !isNaN(num) && check[check.length - 1] % 2 == 0 && check.indexOf(check[i]) !== check.lastIndexOf(check[i]))
                return true;
            else return false;
        }
        return true;
    }
};

const validCard = new ValidateCreditCard()
console.log(validCard.checkTheNumber('9999777788880000'));
console.log(validCard.checkTheNumber('6666666666661666')); 
console.log(validCard.checkTheNumber('4444444444444444'));
console.log(validCard.checkTheNumber('a92332119c011112'));
console.log(validCard.checkTheNumber('1211111111111112'));

