var getColor = (e) => {
    var c = window.getComputedStyle(e).backgroundColor;
    c = c.replace("rgb(", "");
    c = c.replace(")", "");
    var lis = c.split(",");
    for (let i = 0; i < 3; i++) {
        lis[i] = Number(lis[i]);
        lis[i] += 100;
    }
    console.log(lis);
    c = `rgb(${lis[0]}, ${lis[1]}, ${lis[2]})`;
    return c;
}

var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var circle = document.querySelector("#circle");

red.addEventListener("mouseenter", () => {
    circle.style.backgroundColor = getColor(red);
});

green.addEventListener("mouseenter", () => (circle.style.backgroundColor = getColor(green)));

blue.addEventListener("mouseenter", () => (circle.style.backgroundColor = getColor(blue)));