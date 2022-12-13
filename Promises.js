// 


let promise = new Promise(function(resolve, reject){
    console.log('Hello there')
    resolve(80)
})


console.log('Hi bhai')
setTimeout(function(){
    console.log('Hi Bhai! again & again')
}, 2000)

console.log('Hi bhai again')

console.log(promise)
