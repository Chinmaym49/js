// ----------------------------

foo();

function foo() {
    console.log("foo");
}

// ----------------------------

fooo();                     // ERR

var fooo=function() {
    console.log("fooo");
}

// ----------------------------

console.log(x);             // undefined
var x=1;

// ----------------------------

console.log(x);             // ERR

// ----------------------------