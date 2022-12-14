

const loadscript = (src) =>{
    
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>{
            resolve("Script has been loaded sir")
        }
        script.onerror = () => { reject("Some error occured in Script loading..")}
    })
}


// invoking loadscript with url
let promise1 = loadscript("https://github.com/b0n21en5")


// handling resolve value
promise1.then((value) =>{
    console.log(value)
}).then((value) =>{
    console.log("Preceded then has been executed too")

// handling error value
}).catch((error) =>{
    console.log(error)
})