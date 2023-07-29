// STATIC

class Num {

    static y=0;

    constructor(x) {
        this.x=x;
        this.y+=10;
    }

    static print() {                        // Static function
        console.log(this.x);                // Cannot access members (undefined)
        this.y+=1;
        console.log("Num class",this.y);
    }

    get=()=>{                               // Non static function
        return {'x':this.x, 'y':this.y};    // Cannot access static members (NaN/undefined)
    }
}

let n1=new Num(2);
let n2=new Num(3);
for(let i=0;i<3;i++) {
    Num.print();
}
console.log(n1.get());