// //OBJECTS   

// //Creating an object

// // let myCar = {
// //     make : `Ford`,
// //     model : `Mustang`,
// //     year : 1969
// // };

// // console.log(myCar);
// // console.log(myCar.model);
// // console.log(myCar.make);
// // console.log(myCar.year);

// //Assigning values to properties

// let myCar = {};
// myCar.model = `Mustang`;
// myCar.make = `Ford`;
// myCar.year = 1969;

// console.log(myCar);
// console.log(myCar.model);
// console.log(myCar.make);
// console.log(myCar.year);

// //Array Info 

// var info = [`John`, `Schulz`, 32, `Berlin`]
// console.log(info[0])

// var objInfo = {
//     firstName: `John`,
//     lastName: `Schulz`,
//     age: 32,
//     city: `Berlin`
// }
// console.log(objInfo.firstName)

// var family = {
//     children: [{
//             age: 3,
//             name: `paul`
//         },
//         {
//             age: 4,
//             name: `susi`
//         }
//     ],
//     father: `peter`,
//     mother: `sandra`
// };
// console.log(family)
// console.log(family.children[1].name)

// //complex objects

// var appleTree = {
//     apples: [{
//             color: `red`,
//             taste: `very`,
//             num: 12,
//             size: [`big`,
//                 `small`,
//                 `medium`
//             ]
//         },
//         {
//             color: `yellow`,
//             taste: `very`,
//             num: 11
//         }
//     ],
//     tree: `wonderful`
// };
// console.log(appleTree.apples[1].num);
// console.log(appleTree.apples[0].size[2]);


// let user = {
//     name: `John`,
//     age: 30
// };
// user.isAdmin = true;
// console.log(user);

// delete user.age
// console.log(user)

// let user2 = {
//     name: `John`,
//     age: 30,
//     "Like birds": true
// }

// // console.log(user2)    //{ name: 'John', age: 30, 'Like birds': true }
// // console.log(user.like birds)  //Error, property can not be with space
// // console.log(user."like birds") //Error, property can not assign as string

// let user3 = {};
// user3["like birds"] = true;
// console.log(user3)

// delete user3["like birds"]
// console.log(user3)

// let fruit = "kiwi";
// let fruitBucket = {
//     [fruit]: 5
// };
// console.log(fruitBucket) //Computed properties

// //comparing objects

// console.clear();
// let obj4 = {
//     name: {
//         firstName: `John`,
//         lastName: `Schulz`
//     },
//     age: 32
// };

// let obj5 = {
//     name: {
//         firstName: `John`,
//         lastName: `Schulz`
//     },
//     age: 32
// };
// console.log(obj4 === obj5) //false
// console.log(obj4.name.firstName === obj5.name.firstName) //true, because you are comparing a specific key.

// //Loop through objects
// //First convert the object to an array.

// //Methods
// //1.Object.keys
// //2.Object.values
// //3.Object.entries

// //1. 

// const fruits = {
//     apple: 28,
//     orange: 17,
//     pear: 54
// };
// const keys = Object.keys(fruits);
// console.log(keys); //[ 'apple', 'orange', 'pear' ]



// //old way
// // for (let i = 0; i < keys.length; i++) {
// //    console.log(keys[i])

// // }
// // console.log("--------------------")
// // //new way
// // for(const key of keys){
// //     console.log(key)
// // }

// // //another way

// // keys.forEach(displayKeys);
// // function displayKeys(item,index,keys){
// //     console.log(`The key ${item} has index ${index}`)
// // }

// // //2.

// // const values=Object.values(fruits);
// // console.log(values)

// // for(const key of values){
// //     console.log(key)
// // }

// // values.forEach(displayKeys);
// // function displayKeys(item,index,keys){
// //     console.log(`The key ${item} has index ${index}`)
// // }

// //3. 

// const entry = Object.entries(fruits);
// console.log(entry);

// for (const [fruit,number] of entry) {
//     console.log(`The fruit is : ${fruit} and the number is : ${number}`)
// };


// // Write a JavaScript program to list the properties of a JavaScript object.
// // Sample object:
// // var student = {
// // name : "David Rayy",
// // sclass : "VI",
// // rollno : 12 };
// // Sample Output: name,sclass,rollno

// // var student = {
// //     name: "David Rayy",
// //     sclass: "VI",
// //     rollno: 12
// // };


// // const names = Object.keys(student)
// // console.log(names)

// // for (const items of names) {
// //     console.log(items)
// // }

// // #### 1. Check if a number is within a given range
// // Write a program that checks if a number is within the range of an object's min and max properties.
// // Examples:
// // * 4, { min: 0, max: 5 }) ➞ true
// // * 4, { min: 4, max: 5 }) ➞ true
// // * 4, { min: 6, max: 10 }) ➞ false
// // * 5, { min: 5, max: 5 }) ➞ true
// // * Notes: Assume min <= max is always true.

// let searchValue = 4;
// let theRange1 = {
//     min: 0,
//     max: 5
// };

// const searchRange1 = Object.entries(theRange1);

// if (theRange1.min <=searchValue && theRange1.max >=searchValue)
//     console.log(true);
// else console.log(false)

// //Object methods 

var person = {
    firstName: `John`,
    lastName: `Doe`,
    id:5566,
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName());

const personOne = {
    name:"John",
    dateofBirth: 2000,
    age(dateofBirth){
        const today = new Date();
        const year=today.getFullYear();
        const age = year-this.dateofBirth
        return age
    }
};
console.log(personOne.age())

const personTwo = {
    isHuman:false,
    displayIntroduction:function(){
        console.log(`My name is ${this.name},Am I human ${this.isHuman}`)
    }
};
personTwo.displayIntroduction();

//Object create method 
const me = Object.create(personTwo);
me.name="John";
me.isHuman=true;
me.displayIntroduction();