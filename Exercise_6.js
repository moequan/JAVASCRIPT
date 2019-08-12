// //Write a program to compute the average marks of the following students Then, this average is used to determine the corresponding grade.
// //David    80
// //Vinoth 77
// //Divya    88
// //Ishitha 95
// //Thomas 68
// //
// //The grades are computed as follows :
// //Range    Grade
// //<60    F
// //<70    D
// //<80    C
// //<90    B
// //<100 A

//EXERCISE


// function average(marks) {

//     let sum = 0;
//     for (var i = 0; i < marks.length; i++) {
//         sum += marks[i]
//     }
//     let studentsAverage = sum / marks.length
//     console.log(`The average is : ${studentsAverage}`)

//     if (studentsAverage < 60) {
//         console.log(`The Grade is : F`)
//     } else if (studentsAverage < 70) {
//         console.log(`The Grade is : D`)
//     } else if (studentsAverage < 80) {
//         console.log(`Pretty good.. \nThe Grade is : C`)
//     } else if (studentsAverage < 90) {
//         console.log(`Pretty good.. \nThe Grade is : B`)
//     } else if (studentsAverage < 100) {
//         console.log(`Pretty good.. \nThe Grade is : A`)
//     }
// }
// average([80, 77, 88, 95, 68])

//2. Write a program to compute the sum and product of an array of integers.

function productAndSum(integers) {
    let add = 0;
    let multiply = 1;
    let sumOfIntegers;
    let productOfIntegers;
    for (i = 0; i < integers.length; i++) {
        sumOfIntegers = add += integers[i];
        productOfIntegers = multiply *= integers[i];
    }
    console.log(`The sum is : ${sumOfIntegers}\nthe product is ${productOfIntegers}`)
}
productAndSum([1, 2, 3, 4])

//3. Write a program which prints the elements of the following array:
//let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//Sample Output:
//"row 0"
//" 1"
//" 2"
//" 1"
//" 24"
//"row 1"
//" 8"
//" 11"
//" 9"
//" 4"

function rowsAndArrays(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(`ROW:${i}`)
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}
rowsAndArrays([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])
