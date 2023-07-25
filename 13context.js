// ----------------------------

foo();

function foo() {
    console.log("foo");
}

// ----------------------------

fooo();                     // ERR (does not work for functions assigned to variables)

var fooo=function() {
    console.log("fooo");
}

// ----------------------------

console.log(x);             // undefined
x=x+1;
console.log(x);             // NaN
var x=1;

// ----------------------------

console.log(x);             // ERR

// ----------------------------