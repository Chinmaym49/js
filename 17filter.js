var arr=[1,2,3,4,5,6,7];
arr.fill(0,3,5);
console.log(arr);

var lis=arr.filter((e)=>(e>2));
console.log(lis);