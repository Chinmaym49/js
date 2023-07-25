var x=1;
console.log("Outside",x);

function f1() {
    // var x=2;
    console.log("f1",x);

    function f2() {
        // var x=3;
        console.log("f2",x);
    }
    f2();
}

f1();