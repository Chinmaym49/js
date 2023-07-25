// PRIVATE

class Num {

    #y=0;                       // Private should first be declared outside constructor

    constructor(a,b) {
        this.x=a;
        this.#y=b;
    }

    get() {
        return {x:this.x,y:this.#y};
    }

    sum() {
        console.log(this.x+this.#y);
        this.#reset();
    }

    #reset() {
        this.#y=-1;
    }
}

let obj=new Num(3,4);
obj.x=8;
// obj.#y=2;            // Private ERR
// obj.reset();         // Private ERR
obj.sum();
console.table(obj.get());