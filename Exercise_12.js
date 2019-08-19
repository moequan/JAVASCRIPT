// 7. Pig Latin Translation
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

// **Rules**
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

// //Examples:
// pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay"
// pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay"
// pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay"

//**Notes**
//Be sure to preserve proper capitalization, ignore punctuation.

// var vowels = [`a`, `e`, `i`, `o`, `u`];

// function moveFirst(str) {



//     str = str.toLowerCase().split(``)
//     let firstLetter = "";
//     for (i = 1; i < str.length; i++) {

//         if (vowels.indexOf(i) !== -1) {
//             firstLetter += str + "way"

//         } else if (vowels.indexOf(i) === -1) {
//             firstLetter += str[i].slice(0) + str[i][1] + "ay"
//         }
//         console.log(firstLetter)
//     }
//     // firstLetter = firstLetter[0].toUpperCase() + firstLetter.substring(1)
// }
// moveFirst("He told us a very exciting tale")
// moveFirst("Cats are great pets")


function pigLatin(str) {
    let arr = str.toLowerCase().split(`.`).join(``).split(` `)

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let letter = word[0]

        if (letter == `a` || letter == `e` || letter == `i` || letter == `o` || letter == `u`) {
            arr[i] = word + `way`;

        } else {

            arr[i] = word.substring(1) + letter + `ay`
        }
    }
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    console.log(arr.join(` `))
}
pigLatin("Tom got a small piece of pie.")
pigLatin("Cats are great pets.")
pigLatin("He told us a very exciting tale.")