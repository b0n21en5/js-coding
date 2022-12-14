
// setTimeout basically sets an timer to execute
// some piece of code at a given time


console.log("First run")


const myVar = setTimeout(()=>{
    console.log("Set Timeout executes successfully!")
}, 2000)


// clear timeout method stops setTimeout
clearTimeout(myVar)