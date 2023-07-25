// Without Promise

let f1=()=> {
    return "f1";
};

let f2=()=> {
    setTimeout(()=>("f2"),2000);     // Database access takes 2s. But we are not waiting for it to complete.
};

let f3=()=> {
    return "f3";
};

let call1=()=> {
    console.log(f1());      // f1
    console.log(f2());      // undefined
    console.log(f3());      // f3
};

// call1();

// With Promise

let f4=()=> {
    return new Promise((res,rej)=> {
        setTimeout(()=> {
            res("f4");
        },2000);
    });
};

let call2=async()=> {           // Can use await only if fxn is async
    console.log(f1());          // f1
    console.log(await f4());    // f4
    console.log(f3());          // f3
};

call2();