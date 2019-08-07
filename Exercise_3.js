//TASK: Write function that return string wit capitalize the first character of the each word in the string. Put main logic inside getCapitalize function
//USAGE: letterCapitalize("hello world",getCapitalize);
//USAGE: letterCapitalize("i am student of the dci",getCapitalize);
//EXPECTED OUTPUT: Hello World
//EXPECTED OUTPUT: I Am Student Of Dci

function letterCapitalize(str, getCapitalize) {
     getCapitalize(str);
}

function getCapitalize(str) {
    
    let strFirst = str.split(` `)
    
    for (var i = 0; i < strFirst.length; i++) {
        strFirst[i] = strFirst[i].charAt(0).toUpperCase() + strFirst[i].substring(1)
    }
    strFirst = strFirst.join(' ');
    console.log(strFirst)
}    

letterCapitalize("hello world", getCapitalize);
letterCapitalize("i am student of dci", getCapitalize);