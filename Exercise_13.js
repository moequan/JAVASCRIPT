// //Exercise 3: Return Keys and Values
// // Write a program that takes an object and returns the keys and values in separate arrays.
// // Examples:
// // * { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
// // * {key: true} ➞ ["key"], [true]
// // Exercise 4. Scrabble
// // Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// // Example:
// // [
// //   { tile: "N", score: 1 },
// //   { tile: "K", score: 5 },
// //   { tile: "Z", score: 10 },
// //   { tile: "X", score: 8 },
// //   { tile: "D", score: 2 },
// //   { tile: "A", score: 1 },
// //   { tile: "E", score: 1 }
// // ]
// // The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
// // Exercise 5 : Is it an empty object?
// // Write a program that returns true if an object is empty, and false if otherwise.
// // Examples:
// // * {} ➞ true
// // * {a: 1} ➞ false


// // Write a program that takes an object and returns the keys and values in separate arrays.

// var seperate = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const key = Object.keys(seperate);
// const value = Object.values(seperate);

// console.log(key, value);


// // Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.

// var scrabble = [{
//         tile: "N",
//         score: 1
//     },
//     {
//         tile: "K",
//         score: 5
//     },
//     {
//         tile: "Z",
//         score: 10
//     },
//     {
//         tile: "X",
//         score: 8
//     },
//     {
//         tile: "D",
//         score: 2
//     },
//     {
//         tile: "A",
//         score: 1
//     },
//     {
//         tile: "E",
//         score: 1
//     }
// ];
// var score = 0;
// for (const titles of scrabble) {
//     score += titles.score;
// }
// console.log(score)



// // Write a program that returns true if an object is empty, and false if otherwise.

// function verify(obj) {
//     return Object.keys(obj).length === 0;
//     // return !Object.keys(obj).length          ....transforms in boolean 
// }
// console.log(verify({}))
// console.log(verify({
//     a: 1
// }))


// //         Exercise 6 : Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".
// // Example : const student = {
// //    firstName: "John",
// //    lastName: "Smith",
// //    class: 12 };
// // Exercise 7 : Write a JavaScript program to delete the "class" property (or last property) from the previous object.
// // Exercise 8: Write a program to get the length of a JavaScript object.
// // Exercise 9 : Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// // const library = [
// //   {
// //       author: 'J.K. Rowling',
// //       title: 'Harry Potter and the Chamber of Secrets',
// //       readingStatus: true
// //   },
// //   {
// //       author: 'Homer',
// //       title: 'The Odyssey',
// //       readingStatus: true
// //   },
// //   {
// //       author: 'Harper Lee',
// //       title:  'To Kill a Mockingbird',
// //       readingStatus: false
// //   }];
// // E.g. Output:
// // Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
// // Already read The Odyssey by Homer
// // You still need to read To Kill a Mockingbird by Harper Lee




// //6
// //   Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France"  

// var person = {
//     firstName: "John",
//     lastName: "Smith",
//     age: 41,
//     job: "Engineer",
//     city: "Berlin"
// };

//     console.log(`${person.firstName} ${person.lastName} is a ${person.age} year old ${person.job} living in ${person.city}`)


// //7
// // Write a JavaScript program to delete the "class" property (or last property) from the previous object.

// delete person.city
// console.log(person)

// //8
// // Write a program to get the length of a JavaScript object.
// console.log(Object.keys(person).length)

// //9

// // Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.



// const library = [{
//         author: 'J.K. Rowling',
//         title: 'Harry Potter and the Chamber of Secrets',
//         readingStatus: true
//     },
//     {
//         author: 'Homer',
//         title: 'The Odyssey',
//         readingStatus: true
//     },
//     {
//         author: 'Harper Lee',
//         title: 'To Kill a Mockingbird',
//         readingStatus: false
//     }
// ];

// //Case 1
// // console.log(`Already read ${library[0].title} by ${library[0].author}. => ${library[0].readingStatus} `)
// // console.log(`Already read ${library[1].title} by ${library[1].author}. => ${library[1].readingStatus} `)
// // console.log(`You still need to read ${library[2].title} by ${library[2].author}. => ${library[2].readingStatus} `)

// //Case 2

// const  status = Object.values(library)


// for(const data of status){
//     if(data.readingStatus == true) {
//         console.log(`${data.readingStatus} i read it`)
//     }
//     else console.log(`${data.readingStatus} nope, i did not read it`)

// }

// ### Arrays
// 1. Leap Years
// Write a program which finds the leap years in a given range of years.
// 2. First & Last
// Write a program that takes an array and returns the first and last elements as a new array.
// Expected Output:
// [5, 10, 15, 20, 25] ➞ [5, 25]
// ["javascript", 13, null, false, true] ➞ ["javascript", true]
// [undefined, 4, "6", "hello", null] ➞ [undefined, null]
// 3. Find the Smallest Number
// Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g
// [34, 15, 88, 2] ➞ 2
// [34, -345, -1, 100] ➞ -345
// [-76, 1.345, 1, 0] ➞ -76
// [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
// [7, 7, 7] ➞ 7
// 4. Return Student Names
// Write a program that takes an array of students and returns an array of student names.
// Example:
// [ { name: "Steve"},
//  { name: "Mike"},
//  { name: "John"}
// ]
// ➞ ["Steve", "Mike", "John"]
// 5. Spell it out
// Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g.
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]


// 1. Leap Years
// Write a program which finds the leap years in a given range of years.

function findTheLepYear(arr) {
    theLeapYears = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0 && arr[i])
            theLeapYears.push(arr[i])
    }
    console.log(theLeapYears)
}

findTheLepYear([1897, 1880, 1900, 1920, 1970,2000, 2001, 2008, 2009, 2019, 2020, 2035, 2040, 2043, 2050,2800])

// 2. First & Last
// Write a program that takes an array and returns the first and last elements as a new array.
//[5, 10, 15, 20, 25] ➞ [5, 25]

function turnFirstAndLastOneInArray(arr) {
    turnedArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i == 0 || i === arr.length - 1)
            turnedArr.push(arr[i])
    }
    console.log(turnedArr)
}
turnFirstAndLastOneInArray([5, 10, 15, 20, 25])
turnFirstAndLastOneInArray(["javascript", 13, null, false, true])
turnFirstAndLastOneInArray([undefined, 4, "6", "hello", null])


// 3. Find the Smallest Number
// Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g
// [34, 15, 88, 2] ➞ 2
// [34, -345, -1, 100] ➞ -345
// [-76, 1.345, 1, 0] ➞ -76
// [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
// [7, 7, 7] ➞ 7


function theSmallestOne(num) {
    console.log(Math.min(...num))
}
theSmallestOne([34, 15, 88, 2])

// 4. Return Student Names
// Write a program that takes an array of students and returns an array of student names.
// Example:
// [ { name: "Steve"},
//  { name: "Mike"},
//  { name: "John"}
// ]
// ➞ ["Steve", "Mike", "John"]

var students = {
    a: "Steve",
    b: "Mike",
    c: "John"
};
const studentArr = Object.values(students)
console.log(studentArr)

// 5. Spell it out
// Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g.
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

function spellTheWord(word) {
    let theWord=[];
    word1 = "";
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        word1 += word[i]
        theWord.push(word1)
    }
    console.log(theWord)

}
spellTheWord("bee")
spellTheWord("happy")
spellTheWord("eagerly")