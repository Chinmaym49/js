var users=[
    {name:"A",age:12},
    {name:"B",age:15},
    {name:"C",age:8},
    {name:"D",age:5},
    {name:"E",age:16}
]

var generate=()=>{
    var list=document.querySelector(".list");
    list.innerHTML="";
    users.forEach((user)=>{
        var item=document.createElement("div");
        item.classList.add("item");
        var name=document.createTextNode(user.name);
        item.appendChild(name);
        
        var span=document.createElement("span");
        span.classList.add("right");
        var age=document.createTextNode(user.age);
        span.appendChild(age);

        item.appendChild(span);
        list.appendChild(item);
    });
};

window.addEventListener("load",generate);

document.querySelector("#sort").addEventListener("click",()=>{
    users.sort((u1,u2)=>(u1.age-u2.age));
    console.log(users);
    generate();
});