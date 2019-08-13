//Create a function that takes an array of numbers and return the number that's unique.
//Examples:
//unique([3, 3, 3, 7, 3, 3]) ➞ 7
//unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0


function uniqueNum (nums){
    let uniqueArr = [];
   for (i = 0; i < nums.length; i++){
       if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
       uniqueArr.push(nums[i])     
   }  
   console.log(uniqueArr)
}
uniqueNum([0, 0, 0.77, 0, 0,5,4,3,10])
uniqueNum(['pigs','pigs','pigs',`goats`,`tiger`,`lion`])