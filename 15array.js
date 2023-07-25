function put(x) {
    console.log(x);
}

var arr=[1,2,3,"a","b"];
var lis=new Array(1,2,"a","b");

put(arr);
put(arr[0]);
lis.pop();
put(lis);
arr.push(10);
put(arr);
put(arr.length);
lis.unshift("z");
put(lis);
lis.shift();
put(lis);
put(arr.indexOf(3));
put(lis.indexOf("z"));