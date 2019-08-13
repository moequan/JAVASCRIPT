//Create a function that takes an array of numbers and return the number that's unique.
//Examples:
//unique([3, 3, 3, 7, 3, 3]) ➞ 7
//unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0


// function uniqueNum (nums){
//     let uniqueArr = [];
//    for (i = 0; i < nums.length; i++){
//        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
//        uniqueArr.push(nums[i])     
//    }  
//    console.log(uniqueArr)
// }
// uniqueNum([0, 0, 0.77, 0, 0,5,4,3,10])
// uniqueNum(['pigs','pigs','pigs',`goats`,`tiger`,`lion`])

//Create a function toCamelCase() that takes a single string and convert it into camelCase from snake_case.
//Examples:
//toCamelCase("hello_world") ➞ "helloWorld"
//toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"


// function toCamelCase (str){


//    var str = "hello_world";
//    str.split(``)

   
// var camelStr = str.replace(/_/i, "W");
// camelStr = camelStr.split(`w`)
// camelStr = camelStr.join(``)
   
//    console.log(camelStr)
// }

// toCamelCase("hello_world")


// let strFirst = str.split(` `)

//     for (var i = 0; i < strFirst.length; i++) {
//         strFirst[i] = strFirst[i].charAt(0).toUpperCase() + strFirst[i].substring(1)
//     }
//     strFirst = strFirst.join(' ');
//     console.log(strFirst)
// }


function toCamelCase (str){
let strSecond = str.split(`_`)
for (var i = 1; i < strSecond.length; i++) {
      
strSecond[i] = strSecond[i].charAt(0).toUpperCase() + strSecond[i].substring(1)
 }
 
    strSecond = strSecond.join(``)
    console.log(strSecond)
 }
 toCamelCase("hello_world")
 toCamelCase("javascript_is_fun")