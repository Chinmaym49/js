let promise=new Promise((resolve,reject)=>{
    let x=1+1;
    if(x==2) {
        resolve("Success!");                // Not compulsary to be a string, can be anything
    } else {
        reject("Failure!");
    }
});

promise
    .then((msg)=>(console.log(":THEN",msg)))
    .catch((msg)=>(console.log(":CATCH",msg)));