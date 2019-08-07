//CLOSURES

//VAgue definition of a closure: A function that contains at least one variable, and one nested scope.

function outer() {
    var b = 10;

    function inner() {
        var a = 20;
        console.log(`a=${a} b=${b}`)
        a++;
        b++;
    }
    return inner;
}

var x = outer(); // x is equal to whatever outer returns. In this case: x = inner();
var y = outer(); // y is equal to whatever outer returns. In this case: y = inner();   
x();
x();
x();
y();

