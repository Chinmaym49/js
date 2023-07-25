var obj={
    x:1,
    y:2,
    z:3,
    arr:[],
    foo:function(x) {
        this.arr.push(x);
    }
};

console.table(obj);

obj.x+=10;
obj.z-=obj.y;

obj.a=1;
console.log(obj);

delete obj.x;
obj.foo(10);
obj.foo(20);
console.log(obj)