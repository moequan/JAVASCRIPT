//Exercise 3: Return Keys and Values
// Write a program that takes an object and returns the keys and values in separate arrays.
// Examples:
// * { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
// * {key: true} ➞ ["key"], [true]
// Exercise 4. Scrabble
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
// Exercise 5 : Is it an empty object?
// Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// * {} ➞ true
// * {a: 1} ➞ false


// Write a program that takes an object and returns the keys and values in separate arrays.

var seperate = {
    a: 1,
    b: 2,
    c: 3,
};
const key = Object.keys(seperate);
const value = Object.values(seperate);

console.log(key, value);


// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.

var scrabble = [{
            tile: "N",
            score: 1
        },
        {
            tile: "K",
            score: 5
        },
        {
            tile: "Z",
            score: 10
        },
        {
            tile: "X",
            score: 8
        },
        {
            tile: "D",
            score: 2
        },
        {
            tile: "A",
            score: 1
        },
        {
            tile: "E",
            score: 1
        }];
        var score=0;
        for(const titles of scrabble){
            score+=titles.score;
        }
        console.log(score)

    