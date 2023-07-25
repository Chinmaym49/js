var getColor=(e)=> {
    return window.getComputedStyle(e).backgroundColor;
}

var red=document.querySelector(".red");
var green=document.querySelector(".green");
var blue=document.querySelector(".blue");
var circle=document.querySelector(".circle");

red.addEventListener("mouseenter",()=>{
    circle.style.backgroundColor=getColor(red);
});

green.addEventListener("mouseenter",()=>(circle.style.backgroundColor=getColor(green)));

blue.addEventListener("mouseenter",()=>(circle.style.backgroundColor=getColor(blue)));