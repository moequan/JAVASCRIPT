// #Array Exercises
// ##These exercises are aimed at practicing arrays and array methods. Print each task the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = [`Paris`,`London`,`Prague`,`Valletta`];
let value = euroCities[1];
console.log(value)

console.log(`1===================================================================`)
// 2. Change the first item in the array to "Berlin".

euroCities[0] = `Berlin`
console.log(euroCities)

console.log(`2===================================================================`)

// 3. Print the length of the array "euroCities".

console.log(euroCities.length)


console.log(`3===================================================================`)
// 4. Remove the last item of the array "euroCities".
console.log(euroCities.pop())
console.log(euroCities)


console.log(`4===================================================================`)
// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities = euroCities.concat(`Budapest`)

console.log(euroCities)


console.log(`5===================================================================`)
// 6. Remove the second and third items from the euroCities array.


euroCities = euroCities.slice(2,3)

console.log(euroCities)

console.log(`6===================================================================`)
// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

let asianCities = [`Tokyo`,`China`, `Peking`,`Shanghai`]

console.log(`7===================================================================`)
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

asianVar = ``;
asianVar = asianCities.slice(2,4)
console.log(asianVar)

console.log(`8===================================================================`)
// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

worldCities = euroCities.concat(asianCities)
console.log(worldCities)


console.log(`9===================================================================`)
// 10. Reverse the order of worldCities.
worldCities = worldCities.reverse()
console.log(worldCities)

console.log(`10===================================================================`)

// 11. Replace the 3rd item in the array of worldCities with "Toronto".

worldCities[2] = `Toronto`
console.log(worldCities)


console.log(`11===================================================================`)
// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities[-2]=`Washington`
console.log(worldCities)



console.log(`12===================================================================`)
// 13. Write a program to join all elements of the result (worldCities) into a string.
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];

function joinFunc(n){
    joinArray = n.reverse().join(`,`)
    console.log(joinArray);
}
joinFunc(worldCities)

// Expected Output:
// "Berlin,London,Bangkok,Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"



console.log(`13===================================================================`)
// 14. Empty the array euroCities while keeping the original intact.

    let emptyArray = euroCities
    console.log(emptyArray);
    emptyArray = emptyArray.splice(3)
    console.log(emptyArray)



// #Bonus



console.log(`14===================================================================`)
// 15. Write a program to reverse the string: "Hello World".

function reverseFunc(n){
    reverseArray = n.split(` `).reverse()
    reverseArray=reverseArray.join()
    console.log(reverseArray)
}
reverseFunc("Hello World")

// ##Extra Practice

// **Print the results to the console.**

// 1. Make an array of your siblings' names or your favorite movie characters' names.
let lenardo = [`Lenardo`]
console.log(lenardo)
// 2. Make an array of your parents' names.
let parents = [`Birgit`,`Rainer`]
console.log(parents)
// 3. Combine these two arrays.
let combineArray = lenardo.concat(parents)
console.log(combineArray)
// 4. Add your pets' names.
combineArray = combineArray.concat(`Kornelius`)
console.log(combineArray)
// 5. Reverse the order of the array.
combineArray = combineArray.reverse()
console.log(combineArray)
// 6. Access one of your parents' names.
console.log(combineArray[1])
// 7. Update the name of one of your parents.
combineArray[1]=`Peter`
console.log(combineArray)
