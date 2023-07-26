var Complex=function(x,y) {
    this.r = x;
    this.i = y;
    this.print = () => {
        console.log(`>> ${this.r}+i${this.i}`);
    };
};

var c1=new Complex(1,2);
var c2=new Complex(6,3);
console.log(c1);
c1.print();
c2.print();
c1.i+=3;
console.log(c1['i']);
for (const k in c1)
    console.log(k);
c1.print();