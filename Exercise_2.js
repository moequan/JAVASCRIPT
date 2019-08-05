//Task : Write Javascript function that accepts three arguments, a string,letter and function. Passed Function as argument will count the number of occurrences of the specified letter within the string.

//Sameple arguments, "Iamstudent at DCI", 't'
//Expected output: 



function calculateWord (str,letterToCount, countWord)
{
    console.log(`The number of "t´s" in ${str} are ${countWord(letterToCount)}`)
}
function countWord(str)
{
   
   var splitStr = str.split("t").length+1
   return splitStr
}
calculateWord("Iamstudent at DCI","t",countWord)