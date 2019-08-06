//FUNCTION RETURNING FUNCTIONS

function interviewQuestions(job)
{
    console.log("interviewQuestions...");
    if(job==`teacher`)
    {
        return function(name){
            console.log(`Which subject do you teach,${name}?`)
        }
    }
    else {
        return function (name){
            console.log(`Hello ${name},\nwhat do you do?`)
        }
    }
}
var teacherQuestions = interviewQuestions(`maler`)
teacherQuestions(`John`)