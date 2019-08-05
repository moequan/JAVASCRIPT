//PASSING FUNCTIONS AS ARGUMENTS

let name = "Maurice";
function detailsCalculate(name,birthYear, calculateAge)
{
    console.log(`Hi, ${name} your age is ${calculateAge(birthYear)}`);
}

function calculateAge(ageParam)
{
    return 2019-ageParam;
}
console.log("Age...");
detailsCalculate(name,1993,calculateAge)