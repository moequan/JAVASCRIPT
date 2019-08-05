//PASSING FUNCTIONS AS ARGUMENTS


//FIRST SOLUTION

// let name = "Maurice";
// function detailsCalculate(name,birthYear, calculateAge)
// {
//     console.log(`Hi, ${name} your age is ${calculateAge(birthYear)}`);
// }

// function calculateAge(ageParam)
// {
//     return 2019-ageParam;
// }
// console.log("Age...");
// detailsCalculate(name,1993,calculateAge)



//OTHER SOLUTION TO PASS FUNCTIONS

let name = "Maurice";
function detailsCalculate(name,birthYear, calcAge)
{
    console.log(`Hi, ${name} your age is ${calcAge(birthYear)}`);
}

function calculateAge(ageParam)
{
    return 2019-ageParam;
}
console.log("Age...");
detailsCalculate(name,1993,calculateAge)