var isEven=(x)=>{
    return x%2==0;
};

var arr=[2,4,6];
console.log(arr.every(isEven));
console.log(arr.every((e)=>{return e%2==0;}));
console.log(arr.every((e)=>(e%2==0)));
