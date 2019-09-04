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


//

// class ValidateCreditCard {
//     constructor(num) {
//         this.num = num;
//     }
//     checkTheNumber(check) {
//         var num = parseFloat(check)
//         var sum = 0;
//         var obj={};
//         for (var i = 0; i < check.length; i++) {
//             obj[check[i]] = true;
//             sum += Number.parseFloat(check[i])
//             console.log(sum)
//             if (check.length == 16 && !isNaN(num) && check[check.length - 1] % 2 == 0 && check.indexOf(check[i]) !== 0 || check.indexOf(check[0]) == 1&&  sum > 16)
//                 return true;

//         }
//         return false;
//     }
// };

// const validCard = new ValidateCreditCard()

// console.log(validCard.checkTheNumber('9999777788880000'));
// console.log(validCard.checkTheNumber('6666666666661666'));
// console.log(validCard.checkTheNumber('a92332119c011112'));
// console.log(validCard.checkTheNumber('4444444444444444'));
// console.log(validCard.checkTheNumber('1211111111111112'));





//OTHER SOLUTION 

// class ValidateCreditCard {
//     validate(creditCardNum) {
//         console.log('validate...');
//         console.log(creditCardNum);
//         if (creditCardNum.length !== 16)
//             return false;
//         //All of the digits must be numbers
//         for (var i = 0; i < creditCardNum.length; i++) {
//             var currentNumber = creditCardNum[i];
//             currentNumber = Number.parseInt(currentNumber); //Number: von JS definiert;
//             if (!Number.isInteger(currentNumber))
//                 return false;
//         }
//         //The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
//         var obj = {}
//         for (var i = 0; i < creditCardNum.length; i++) {
//             obj[creditCardNum[i]] = true;
//             /*
//             obj = {
//                 a : true,
//                 9: true,
//                 ...
//                 so on
//             }
//             */
//         }
//         // console.log(obj);
//         // console.log(Object.keys(obj));
//         if (Object.keys(obj).length < 2) {
//             console.log('this is not match my condition of least two different digit');
//             return false;
//         }
//         //The final digit must be even
//         // console.log(creditCardNum.length);
//         // console.log(creditCardNum[creditCardNum.length-1]);
//         if (creditCardNum[creditCardNum.length - 1] % 2 !== 0)
//             return false;

//         //The sum of all the digits must be greater than 16
//         var sum = 0;
//         for (i = 0; i < creditCardNum.length; i++) {
//             sum += Number.parseInt(creditCardNum[i]);
//         }
//         if (sum <= 16) //nach dem loop, weil erste der loop beendet sein muß, dann erst kann man rechnen
//             return false;
//         return true;
//     }
// }
// var ccObj = new ValidateCreditCard();
// // ccObj.validate();                   //prüfen, ob es funktioniert
// // ccObj.validate('a92332119c011112');
// console.log(ccObj.validate('9999777788880000'));
// console.log(ccObj.validate('6666666666661666'));
// console.log(ccObj.validate('a92332119c011112'));
// console.log(ccObj.validate('4444444444444444'));
// console.log(ccObj.validate('1211111111111112'));


// Encapsulation
// One of the core concepts of OOP is encapsulation.
//An important part of encapsulation is that data (object properties) should not be directly accessed or modified from outside the object.
//To access or modify a property we would use a getter (access) or a setter (modify), which are specific methods we define in our class.
//Currently there is no native support for private properties in JavaScript (it is possible to mimic private properties but we’re not going to go into that). So all the properties we’ve declared can be directly accessed from outside the object.

class User {
    constructor(name,age,email){
        this.fullName=name;
        this.age=age;
        this.email=email;
    }
    get name (){
        console.log(`get name ...`);
        return this.fullName;
    }
    set name (newName){

        console.log(`set name ...`)
        this.fullName=newName;
    }
};

const objUser = new User(`John`,34,`test@gmail.com`);
console.log(objUser.name); //output John 
objUser.name="test"; //set name method
console.log(objUser.name) //called get name method 




//------------------- Inheritance ------------------------------
//Inheritance: Classes can also inherit from other classes. The class being inherited from is called the parent, and the class inheriting from the parentis called the child. In our example, another class, let’s say Administrator, can inherit the properties and methods of the User class:
//To create a class inheritance, use the extends keyword.
//User class= Parent  and Administrator class = child
//There are a few things to keep in mind when using super():
// You can only use super() in a derived class. If you try to use it in a non-derived class (a class that doesn’t use extends) or a function, it will throw an error.
// You must call super() before accessing this in the constructor. Since super() is responsible for initializing this, attempting to access this before calling super() results in an error.
// The only way to avoid calling super() is to return an object from the class constructor.

class Administrator extends User {
    constructor(name,age,email,role){
        super(name,age,email);
        this.role=role;
    }
    get rolePermission(){
        console.log(`get role...`);
        return this.role;
    }
    set rolePermission(newRole){
        console.log(`set role ....`);
        this.role=newRole;
    }
}

const objAdmin = new Administrator(`Sarah`,25,`sarah@gmail.com`,`Admin`)
console.log(objAdmin.name);
console.log(objAdmin.rolePermission);
