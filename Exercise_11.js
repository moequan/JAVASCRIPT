// 9. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples: 
//     sumOfCubes() ➞ 855   //// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes() ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

//**Note**
//If given an empty array, return 0.

// function sumOfCubes(nums){
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++){
//        sum = sum + Math.pow(nums[i], 3)
//     }
//     console.log(sum)
// }
// sumOfCubes([1, 5, 9])
// sumOfCubes([3, 4, 5])
// sumOfCubes([2])
// sumOfCubes([])

//6. Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
//   evenNums(8) ➞ [2, 4, 6, 8] 
//   evenNums(4) ➞ [2, 4]
//   evenNums(2) ➞ [2]

//If there are no even numbers, return an empty array. 


function evenNumbers(nums) {
    let evenArr = [];
    for (let i = 1; i <= nums; i++) {
        if (i % 2 == 0)
            evenArr.push(i)
    }
    console.log(evenArr)
}


evenNumbers(8)
evenNumbers(4)
evenNumbers(2)
evenNumbers(1)
evenNumbers(40)
