let Employee = function(fName, lName) {
    this.fName = fName;
    this.lName = lName;
    this.printFullName = function() {
        console.log(`Full Name : ${this.fName} ${this.lName}`);
    }
}
// Prototype used to inject variables or functions in existing classlike component.
// If, Employee was present in some other library, we can inject functions in it by using prototype.

Employee.prototype.getFirstName = function() {
    return this.fName;
}

Employee.prototype.getLastName = function() {
    return this.lName;
}

let emp1 = new Employee("abc", "xyz");
emp1.printFullName();
console.log(emp1.getFirstName(),emp1.getLastName());
