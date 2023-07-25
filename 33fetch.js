// Run on browser console

fetch("https://official-joke-api.appspot.com/random_joke")      // Returns promise
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(`
    Question: ${data.setup}
    Answer: ${data.punchline}
    `);
})
.catch((err)=>(console.log(err)));