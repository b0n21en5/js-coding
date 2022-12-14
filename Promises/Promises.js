// The Promise object represents the eventual completion (resolve)
// or failure (reject) of an Asynchronus operation and its resulting value


let promise = new Promise(function(resolve, reject){
    console.log('Promise1 is pending..')

    setTimeout(function(){
        
        resolve('Promise1 has been resolved :)')   // this is treated as promise resolve value
    }, 2000)
    
})


let promise2 = new Promise((resolve, reject) => { 

    console.log('Promise2 is pending..')  

    setTimeout(function(){

        // this is treated as promise error value
        reject('This is an Error from promise2 :(')   

    }, 2000)
    
})



// promise handler is used to handle asynchronus action's 
// success value or failure reason:  .then, .catch

promise.then((value) => {
    console.log(value)

}, (error) => {

    console.log(error)
})


// to get the resolved value we use .then
promise2.then((value) =>{
    console.log('resolved')


// to catch error handling when using .then
}, (error) => {

    console.log(error)  
})






let promise3 = new Promise((resolve, reject) => {

    console.log('3rd Promise is pending..')

    setTimeout(() => {

        reject('Promise3 is rejected promise too')
    }, 5000)


// catch is used to catch the error 
}).catch((error) => {

    console.log(error)  // error is the rejected promise value 
})