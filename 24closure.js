function foo() {
    var x="hello";
    function f() {
        console.log(x);
    }
    return f;
}

var fxn=foo();
fxn();

function add(x) {
    function f(y) {
        return x+y;
    }
    return f;
}

var f1=add(3);
console.log(f1(4));
console.log(add(3)(4));