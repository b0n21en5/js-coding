
// promise chaining & multiple handlers are not same

// in promise chaining values can be carried out but
// in multiple handler no values are carried out


const promise = new Promise((resolve, reject) =>{


    setTimeout(() =>{
        resolve("Promise resolved")
    }, 2000)
})


promise.then((value) =>{
    alert(value)
})

promise.then((val) =>{
    alert("2nd handler")
})

promise.then((val) =>{
    alert("3rd handler")
})

promise.then((val) =>{
    alert("4th handler")
})

promise.catch((err) =>{
    alert("A very simple erorr occured & it has taken care off")
})