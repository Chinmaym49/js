// STATIC

class Num {

    static y=0;

    constructor(x) {
        this.x=x;
        this.y+=10;
    }

    static print() {                       // Static function
        // this.x=8;                       // Cannot access members
        this.y+=1;
        console.log("Num class",this.y);
    }
}

let n1=new Num(2);
let n2=new Num(3);
for(let i=0;i<3;i++) {
    Num.print();
}