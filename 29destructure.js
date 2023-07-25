let arr=["abc",123,true];
let [s,i,f]=arr;
console.log(s);
i+=4;
console.log(arr,i);         // No change in arr

let [a,b]=arr;
console.log(a,b);           // first 2 values are copied

let obj={
    x:1,
    y:2
};

let {x,y}=obj;              // Names should be same
console.log(x);
y=0;
console.log(obj,y);         // No change in obj

let ob={
    l:1,
    m:2,
    n:3
};

let {l,n}=ob;
console.log(l,n);       // Gives ob.l, ob.n