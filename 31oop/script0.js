// IMPORT

const User=require("./User.js");

let obj=new User(1,"abc");
obj.upskill("python");
obj.upskill("js");
console.table(obj.get());