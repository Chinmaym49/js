var obj={
    'x':1,
    'y':2,
    'z':3,
    '1':4,
    'arr':[],
    'foo':function(x) {
        this.arr.push(x);
    },
    'fooo':()=>{
        console.log("fooo");
    }
};

console.table(obj);

obj.x+=10;
obj.z-=obj.y;

obj.a=1;
console.table(obj);

delete obj.x;
obj.foo(10);
obj.foo(20);
obj['foo'](2);
console.log(obj[1]);
console.log(obj);

for (const k in obj) {
    console.log(typeof k, typeof obj[k]);
    console.log(`k: ${k} v:${obj[k]}`);
}

obj.fooo();