
// async & await make promise easier to write
// 
// async makes a function return a promise
// await makes a function wait for a promise




// async keyword before a function makes it retuen a promise
async function weather(){
    let lucknowWeather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("28 deg celcius")
        },1000)
    })



    let mumbaiWeather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("32 deg celcius")
        },2500)
    })


    console.log("Lucknow weather is now fetching, please wait..")

    
    // await can be used only inside an async function
    let lucknowW = await lucknowWeather
    console.log("Lucknow weather reached: " + lucknowW)
    console.log("Mumbai weather is now fetching, please wait..")
    let mumbaiW = await mumbaiWeather
    console.log("Mumbai weather reached: " + mumbaiW)

    return [lucknowW, mumbaiW]


}


const parallel = async () =>{
    console.log("This is parrallel await function")
}



const mainFunc = async () => {

    console.log("weather report arriving..")
    let ww = await weather()
    let pp = await parallel()

}

mainFunc()
