let add=(...args)=>{                    // REST
    console.log(args);                  // Packs the values
    let s=0;
    for(const arg of args) {
        s+=arg;
    }
    return s;
};

console.log(add(1,2,3,4,5,6,7,8,9));
console.log();

let mult=(x,y,z)=>{
    return x*y*z;
};

let arr=[3,4,5];
console.log(...arr);                    // SPREAD
console.log(mult(...arr));              // Unpacks the values

let a=[1,2,3];
let b=[...a];                           // Copy array
let c=[...a,...b];                      // Merge arrays
console.log(b,c);

let o1={x:1};
let o={...o1};                          // Copy object
let o2={y:2,z:3};
let o3={...o1,...o2};                   // Merge objects
console.table(o3)

// let d=a;
// d[0]=0;
// console.log(a,d);