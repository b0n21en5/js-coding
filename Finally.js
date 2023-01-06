const f = () =>{
    try {
        // let hello= 0
        console.log(hello)
        return

    } catch (error) {
        console.log("Try failed to execute")
        // console.log(error.message)
        // console.log(hi)
    }
    finally{
        console.log("Finally Executed successfully")
    }
    console.log("end of function")
}


f()
console.log('everything executed')