//Task : Write Javascript function that accepts three arguments, a string,letter and function. Passed Function as argument will count the number of occurrences of the specified letter within the string.

//Sameple arguments, "Iamstudent at DCI", 't'
//Expected output: 



// function calculateWord (str,letterToCount, countWord)
// {
//     console.log(`The number of "t´s" in ${str} are ${countWord(letterToCount)}`)
// }
// function countWord(str)
// {

//    var splitStr = str.split("t").length+1
//    return splitStr
// }
// calculateWord("Iamstudent at DCI","t",countWord)




//Task : Write Javascript function that accepts two arguments, a string and function. Passed Function as argument will check the string and find the not repeated character from string and return that not repeated all characters.
//Sample arguments, "axbyazcddbexcyz", findNotRepeated
//Expected output: e



function repeatCharaters(strParam, funParam)
{
console.log(`Not Repeated Character: ${funParam(strParam)}`)
}
function findNotRepeated(strParam)
{
 //console.log(strParam.indexOf('e'));
 //console.log(strParam.indexOf('e',11));
 //for Bonus Task
 var result='';
 for(var i=0; i<strParam.length; i++)
 {
   var charValue=strParam.charAt(i);
   var firstIndex=strParam.indexOf(charValue);
   var secondIndex=strParam.lastIndexOf(charValue);
   //if(strParam.indexOf(charValue)== i && strParam.indexOf(charValue,i+1)==-1)
   if(strParam.indexOf(charValue)== strParam.lastIndexOf(charValue))
   {
     //Main Task
     //return strParam[i];
     //Bonus Task
     result +=strParam[i];
   }
 }
 return result;
}
repeatCharaters("axbyazcddbexcyzl",findNotRepeated);