var x=1;

var counter=setInterval(()=>{                   // async
    if(x<=20) {
        console.log(x);
        x++;
    } else {
        clearInterval(counter);
    }
},100);

setTimeout(()=>(console.log("done")),3000);     // async

