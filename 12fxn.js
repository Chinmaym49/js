function f1() {
    console.log("f1 called");
}

function f2(x) {
    console.log(x);
}

function f3() {
    return "f3 returned";
}

f1();
f1("Wwxw");

f2(1);
f2();
f2(1,"cwc");

console.log(f3());
console.log(f3(113));

var f=function(x) {
    return x+1;
};

console.log(f(9));