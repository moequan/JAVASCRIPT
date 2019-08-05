//Task : Make Two Functions
//Create one global variable and it contains both function info and show in console log.
//Function 1 : Contains Personal Info (Full name, date of birth, Title, age)
//Function 2 : Contains Address Info (City,State,Zip, Country)
//Hint Take Third function to merge both values and put in global variables.



function personalInfo(title, fullName, birth, age) {

    let totalInfo = (`${title} ${fullName} ${birth} ${age} years old` + " ")
    return totalInfo;
}

function addressInfo(city, state, zip, country) {
    
    let totalInfo = (`${city} ${state} ${zip} ${country}`)
    return totalInfo;
}

var dataInfo = personalInfo("Mr", "Carlos Pérez", "12.10.2000", "19") + addressInfo("Barcelona", "Spain", "12584", "Venezuela");
console.log(dataInfo);


