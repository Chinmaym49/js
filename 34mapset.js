// MAP

let mp=new Map();
mp.set(1,"a");
mp.set(2,"b");
mp.set("c",[1,2,3]);
console.log(mp);
console.log(mp.get("c"));
console.log(mp["c"]);           // Doesn't work
mp.delete(1);
console.log(mp);

let arr=[1,2,3];
arr.forEach((x,i)=>(console.log(x,arr[i])));

mp.forEach((v,k)=>(console.log(k,v)));

mp.get("c").push(4);
mp.set(2,mp.get(2)+"y");
console.log(mp);
console.log();

//SET

let s=new Set();
s.add(1);
s.add(2);
s.add(1);
s.add(3);
s.add(-1);
console.log(s);
s.delete(1);
console.log(s);

s.forEach((x)=>(console.log(x)));