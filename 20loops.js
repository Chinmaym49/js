arr=[1,2,3,4];

for(var i=0;i<arr.length;i++) {
    console.log(arr[i]);
    arr[i]*=10;
}

var i=0;
while(i<arr.length) {
    console.log(arr[i]);
    arr[i]*=10;
    i++;
}

var i=0;
do {
    console.log(arr[i]);
    arr[i]/=10;
    i++;
} while(i<arr.length);

arr.forEach((x)=>(console.log(x)));

for(const x of arr) {
    console.log(x);
}

var obj={
    x:1,
    y:2,
    z:3
};

for(const k in obj) {
    console.log(`k: ${k} v:${obj[k]}`);
}