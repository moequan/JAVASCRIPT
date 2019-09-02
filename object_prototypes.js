//function instantiation
// function Animal(name,energy){
//     let animal = {};
//     animal.name=name;
//     animal.energy=energy;
//     animal.eat = function (amount){
//         console.log(`${this.name} is eating`)
//         this.energy+=amount
//     }
//     animal.sleep=function(length){
//         console.log(`${this.name} is sleeping`);
//         this.energy+=length;
//     }
//     animal.play=function(length){
//         console.log(`${this.name} is playing`)
//         this.energy -= length
//     }
//     return animal
// }
// const leo = Animal(`Leo`,7);
// const snoop = Animal(`snoop`,10)
// leo.eat(10);


const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    },
    play(length) {
        console.log(`${this.name} is playing`)
        this.energy -= length
    }
};

// function Animal(name, energy) {
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
//     animal.eat = animalMethods.eat;
//     animal.sleep = animalMethods.sleep;
//     animal.play = animalMethods.play;
//     return animal;
// }
// const leo = Animal(`Leo`, 7);
// const snoop = Animal(`snoop`, 10);
// leo.eat(10);

//Object.create

const parent = {
    name: "John",
    age: 30,
    nationality: "German"
};

const child = Object.create(parent);
child.name = "Doe";
child.age = 20;
console.log(child);
console.log(child.name);
console.log(child.age);
console.log(child.nationality);
console.log(parent.name);

function doThings() {}
console.log(doThings.prototype)

//Prototype Instantiation

function Animal(name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name;
    animal.energy = energy;
    return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}
const leo = Animal(`Leo`, 7);
const snoop = Animal(`snoop`, 10);
leo.eat(10);

//Built-in prototype 

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);

console.log(arr) // the result of Array.prototype.toString

//Another example 
function f() {}
console.log(f.__proto__ === Function.prototype);
console.log(f.__proto__.__proto__ === Object.prototype);


//prototype.map()

let newArr = [16, 36, 81, 144];
let result = newArr.map(x => x ** 0.5)
console.log(result);

var persons = [{
        firstName: "John",
        lastName: "Doe"
    },
    {
        firstName: "Jayne",
        lastName: "Frye"
    },
    {
        firstName: "Sabine",
        lastName: "Ebert"
    }
];
console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstName, item.lastName].join(" ")
};

//Reduce Method

var numbers = [50, 60, 70, 10];
var resultOut = numbers.reduce(myreduceFunc);

function myreduceFunc(total, num) {
    console.log(`Total: ${total} and Num: ${num}`);
    return total + num
};
console.log(resultOut)

const euros = [29.76, 41.85, 46.5];
const avg = euros.reduce((total, amount, index, arr) => {
    console.log(`total: ${total} and amount : ${amount}`);

    total += amount;
    console.log(`Total : ${total}`);

    if (index == arr.length - 1)
        return total / arr.length;
    else
        return total;
});
console.log(avg)


const dataArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const flatValues = dataArr.reduce((total, value) => {
    console.log(`total: ${total} and value : ${value}`);
    return total.concat(value)
}, []);
console.log(flatValues)

//Task 

// const fruitBasket = [`banana`, `cherry`, `orange`, `apple`, `cherry`, `orange`, `apple`, `banana`, `cherry`, `orange`, `fig`];





var fruitBasket = [`banana`, `cherry`, `orange`, `apple`, `cherry`, `orange`, `apple`, `banana`, `cherry`, `orange`, `fig`];

var countedFruits = fruitBasket.reduce(function (allFruits, name) {
    if (name in allFruits) {
        allFruits[name]++;
    } else {
        allFruits[name] = 1;
    }
    return allFruits;
}, {});
console.log(countedFruits)

// Filter method

var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18
}
console.log(ages.filter(checkAdult))

const number2 = [1, 3, 4, 6, 8, 9];

const filterValue = () => {
    return number2.filter(number => {
        return number % 2 === 0;
    });
}
console.log(filterValue())

// Task 
//const students = [`krunal, `ankit`, `appdividend`, `nehal`, `dhaval`]
//return all items with `al`

var students = [`krunal`, `ankit`, `appdividend`, `nehal`, `dhaval`];

function checkLetters(name) {
    return name.includes(`al`)
};
console.log(students.filter(checkLetters))

//RECAP

//ForEach

//1
var names = [`Steve`, `John`, `Stella`, `Matilda`, `John`];
var nums = [5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8];

names.forEach(function (element) {

    console.log(element)
});

//2

function printOutElements(element) {

    console.log(element)
}
names.forEach(printOutElements);

//Reduce 

nums.reduce(addEverything)

function addEverything(acc, val) {
    console.log(acc + val)
    return acc + val;
}


//Map

const doubleNums = nums.map((el) => el * 2);
console.log(doubleNums)




const doubleNames = names.map(theNames)

function theNames(el) {
    return el + el
};
console.log(doubleNames)

//Pig Latin with map

const pigLatin = names.map(addYay)

function addYay(el) {
    let firstLetter = el.slice(0, 1);
    let rest = el.slice(1, el.length);
    return rest + firstLetter + `YAY`
}
console.log(pigLatin)

//Filter

const capitals = names.filter(findTheS)

function findTheS(el) {
    if (el[0] == `S`)
        return el
};
console.log(capitals);

const bigger = nums.filter(biggerThanFour)

function biggerThanFour(el) {
    if (el > 4)
        return el
}
console.log(bigger)

//Sort

const sortNums = [4, 2, 1, 10]

sortNums.sort(function (a, b) {
    return a - b
})
console.log(sortNums)

const sortNames = [`Zeta`, `Anna`, `Biggi`, `Rich`, `John`];

sortNames.sort()

console.log(sortNames)



const sortObj = [{
        name: `smth`,
        age: 20
    },
    {
        name: `smth`,
        age: 8
    },
    {
        name: `smth`,
        age: 10
    },
    {
        name: `I am cool`,
        age: 108
    }
];

sortObj.sort(function(a,b){
    return a.age - b.age 
});
console.log(sortObj)

//EXERCISES

/////////////////////////////////////////
////////////////FOREACH//////////////////
/////////////////////////////////////////
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/
function doubleValues(arr) {
    let res = [];
    arr.forEach(element => {
        res.push(element * 2);
    });
    console.log(res);
}
doubleValues([1, 2, 3]);
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]
*/
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
/////////////////////////////////////////
/////////////////REDUCE//////////////////
/////////////////////////////////////////
// Write a function that will take as an input an array of words and it will concatenate all the words in one.
// var arr = ['hi', 'myname', 'is', 'slim', 'shady']
// joinAll(arr); 
// output: himynameisslimshady 
// Turn an array of numbers into a total of all the numbers
// var arr = [1, 5, 77, 33]
// call: addAll(arr); 
// output: 116 
console.log('------------------------')
// Figure out how many people voted
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
// function ourReducerFunction(acc, value){
//     if(value.voted == true)
//         return acc + 1;
//     else return acc;
// }
// function whoVoted(arr){
//     return arr.reduce(ourReducerFunction, 0)
// }
///////////////////////////////////////
// function whoVoted(arr){
//     return arr.reduce((acc, value) => {
//         if(value.voted == true)
//             return acc + 1;
//         else return acc;  
//     }, 0)
// }
//////////////////////////////////////
function whoVoted(arr) {
    return arr.reduce(function (acc, value) {
        if (value.voted)
            return acc + 1;
        else return acc;
    }, 0)
}
console.log(whoVoted(voters));
//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// call: shoppingSpree(wishlist); 
// output: 227005
//Given an array of arrays, flatten them into a single array
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// call: flatten(arrays); 
// output: ["1", "2", "3", true, 4, 5, 6];
/////////////////////////////////////////
//////////////////MAP////////////////////
/////////////////////////////////////////
// Make an array of numbers that are doubles of the first array
// call: doubleNumbers([2, 5, 100]); 
// output: [4, 10, 200]
// Take an array of numbers and make them strings
// call: doubleNumbers([2, 5, 100]); 
// output: ['2', '5', '100']
// Capitalize each of an array of names
// call: capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 
// output: ["John", "Jacob", "Jingleheimer", "Schmidt"]
// Make an array of strings of the names
// let arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16  
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]; 
// call: takeNames(arr);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// Using the same array above as input, write a function that returns an array of strings of the names saying whether or not they can go to The Matrix. In order to go to the Matrix you need to be at least 18
// call: whoCanGo(arr)
// output: 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
let celebs = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
whoCanGo = (arr) => {
    let res = arr.map((element) => {
        if(element.age >= 18)
            return `${element.name} can go to the Matrix`;
        else return `${element.name} is under age`;
    });
    console.log(res);
    return res;
}
whoCanGo(celebs)
/////////////////////////////////////////
////////////////FILTER///////////////////
/////////////////////////////////////////
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// call: fiveAndGreaterOnly([3, 6, 8, 2]); 
// output: [6, 8]
// Given an array of numbers, return a new array that only includes the even numbers.
// call: fiveAndGreaterOnly([3, 6, 8, 2]); 
// output: [6, 8, 2]
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// call: fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); 
// output"["dog", "by",  "wolf", "eaten"] 
// Write a function that will return a new array of people that are members of the Illuminati
//let arr =[
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]
//  call : whoIsAnIlluminati(arr)
// Filter out all the people who are not old enough to see The Matrix
// let arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16  
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]; 
// call: canSeeMAtrix(arr);
/////////////////////////////////////////
/////////////////SORT////////////////////
/////////////////////////////////////////
// Sort an array from smallest number to largest
// call: fromSmallToLarge([1, 3, 5, 2, 90, 20])
// ouput: [1, 2, 3, 5, 20, 90]
// Sort an array from largest number to smallest
// call: fromLargeToSmall([1, 3, 5, 2, 90, 20])
// ouput: [90, 20, 5, 3, 2, 1]
// Sort an array from shortest string to longest
// call: x(["dog", "wolf", "by", "family", "eaten"]); 
// output: ["by", "dog", "wolf", "eaten", "family"] 
// Sort an array alphabetically
// call: alphabetical(["dog", "wolf", "by", "family", "eaten"]); 
// output: ["by", "dog", "eaten", "family", "wolf"] 
let animals = ["by", "dog", "wolf", "eaten", "family"];
animals.sort();
console.log(animals)
// Sort the objects in the array by age
// let arr = [
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]
//call: sortByAge(arr);






