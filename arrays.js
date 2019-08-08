//ARRAYS

let fruits = [`mango`, `pineapple`, `banana`]
let vegetables = new Array(`tomato`, `pak choi`, `aubergine`)


console.log(fruits)
console.log(fruits[1])
console.log(vegetables)

fruits[1] = `apple`
console.log(fruits)

fruits[1] = fruits[1].toLocaleUpperCase()
console.log(fruits)

// let names = [`Erwan`,`Irem`, `Maurice`, `Sam`,`Flozzy`, `Flobby`]

// for (let i = 0; i<names.length; i++){
//     console.log(names[i])
// }

let bands = [
    [`Queen`,
        `Tokyo Hotel`,
        `Green Day`,
    ],
    `Black Sabbath`,
    `Guns n Roses`,
];
console.log(bands)
console.log(bands[0][1][0])

for (let i = 0; i < bands.length; i++) {
    console.log(bands[i])
    for (j = 0; j < bands[i][j]; j++)[
        console.log(bands[i][j])
    ]
}
console.log(`==================================`)


//METHODS

let characters = [`Rick`,`Morty`,`NoobNoob`,`Jessica`, `Balrog`]

console.log(characters.indexOf(`NoobNoob`))
console.log(`==================================`)

console.log(characters.concat(fruits))

console.log(`==================================`)

console.log(characters.slice(2))


console.log(`==================================`)

characters.splice(1,0,`Summer`)
console.log(characters)
console.log(characters.reverse())
console.log(characters.join(`  `))
console.log(characters.pop())
console.log(characters)
console.log(characters.push(`Birdman`,`Aragorn`))
console.log(characters)
console.log(characters.shift())
console.log(characters)
console.log(characters.unshift(`Legolas`))
console.log(characters)