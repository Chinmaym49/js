class A{
    
    #x=1;
    
    constructor(t) {
        this.y=t;
    }

    f() {
        console.log("hello");
    }

    f1() {
        console.log(this.#x);
    }

    #f2() {
        console.log(this.y);
    }

}

class B extends A {

    constructor(p,q) {
        super(p);
        this.z=q;
    }

    f() {
        this.z+=this.y;
        super.f();
        console.log("world");
    }

}

let obj=new B(2,3);
obj.f();
obj.f1();
// obj.#f2();                       // Private
// console.log(obj.#x);             // Private
console.log(obj.y);
console.log(obj.z);
