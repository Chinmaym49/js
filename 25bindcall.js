var obj1={
    'x':1,
    'y':2,
    'add': function() {
        console.log(`
        x: ${this.x}
        y: ${this.y}
        Sum: ${this.x+this.y}
        `);
    }
};

obj1.add();

var obj2={
    x:5,
    y:6
};

// obj2.add();          // ERR

var ob2add=obj1.add.bind(obj2);
ob2add();
obj1.add.call(obj2);