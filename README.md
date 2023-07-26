it is allowed to use variable before declaring it as var (Not allowed for let though)

interpolation (``)

Math.XX

== and === (later checks type as well) (coersion)

typeof array give object

falsy (values which correspond to false)

functions are matched even if number of args are different

undefined+1=NaN

it is allowed to call method before defining it (given that the method is not assigned to var)

shift (popfront), unshift (insert at start), every, fill (replaces index range with value)

delete obj.x

for, while, do while, for each traditional, forEach, for each traditional for obj

obj.x equivalent to obj['x']

while creating obj, make it a practice to declare key as string. let obj = {'x' : 1, 'y' : 'abc', 'z' : n, '1' : {}, 'a' : [1,2,3], foo : function(){}};

setTimeout, setInterval

functions can be used to create classlike components using "this", "new" etc.

the objects of classlike components can be accessed as objects.

closure is when function returns a function. we can then just call the inner funtion using variable().

don't use anonymous functions in objects and classlike components.

bind is used to borrow method from 1 object and use it in another object.

let vs var (scope)

js is an interpreted language like python.

destructure (var [a,b]=arr; var {x,y}=obj; [name should be same])
