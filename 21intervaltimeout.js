var x=1;

var counter=setInterval(()=>{                   // async (runs every 0.2s)
    if(x<=20) {
        console.log(x);
        x++;
    } else {
        clearInterval(counter);
    }
},200);

setTimeout(()=>(console.log("done")),3000);     // async (printed after 3s)
