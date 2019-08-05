//REST OPERATORS

// function countArguments(param1,param2,param3)
{
    // console.log(param1 + "" + param2 + "" + param3);
}

// function countArguments(...args)
// {
//     var param1 = args [0];
//     var param2 = [1];
//     var param3 = [2];

//     console.log(param1 + "" + param2 + "" + param3);

// }

// function countArguments(param1, ...args)
// {

//     var param2 = args[0];
//     var param3 = args[1];

//     console.log(param1 + "" + param2 + "" + param3);

// }
// countArguments(`welcome`,`to`,`Earth`)

//Task : Pass all your personal info as parameters except first name , last name and birth date and rest all the info (like title,city,zip,country) collect as rest operator and proper display via console inside the function.

// function personalInfo(firstName, lastName, birthDate, ...args){
//     var title = args[0];
//     var city = args[1];
//     var zip = args[2];
//     var country = args[3];
//     console.log(`${firstName} ${lastName}, birth date is ${birthDate}, he is a ${title},born in ${city}, ${zip}, in the ${country}`);
// }
// personalInfo() // Put Infos in there

// Scope : Local & Global

//LOCAL

// function showMessage()
// {
//     let message = "Hello I am JavaScript";
//     console.log(message);
// }
// showMessage() // Hello, I am Javascript.
// console.log(message) // <!-- Error 

//GLOBAL

let userName = "John";
function showMessage()
{
    userName ="Pinto"
    let message = `Hello,` + userName; // Hello, Pinto
    console.log(message);
}
showMessage() // functions are able to touch global variables