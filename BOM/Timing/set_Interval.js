

// SetInterval methods repeats a given
// function at every given interval


const Intv = setInterval(() =>{
    console.log("This Set Intverval will execute in every 1 sec..")
}, 1000)


console.log("Program runs successfully!")


// clearInterval method stop set interval execution
clearInterval(Intv)


console.log("Program is stopping now..")