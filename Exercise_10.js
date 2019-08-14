//8. Dictionary
//Create a function that takes in an initial word and filters out an array to contain words that start //with the same letters as the initial word.
//
//Examples
//dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
//dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
//dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
//
//**Notes**
//* If none of the words match, return an empty array.
//* Keep the filtered array in the same relative order as the original array of words.


function wordFilter (str,arr){
    let filterWord=[];
    for(var i = 0; i<arr.length; i++){
     if(arr[i].includes(str))
      filterWord.push(arr[i]) 
    }
    console.log(filterWord) 
}
wordFilter("bu",["button", "breakfast", "border"])
wordFilter("tri", ["triplet", "tries", "trip", "piano", "tree"])
wordFilter("beau", ["pastry", "delicious", "name", "boring"])

