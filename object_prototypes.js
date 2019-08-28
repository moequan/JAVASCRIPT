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