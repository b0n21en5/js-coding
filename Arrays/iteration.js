// iterating through an array


let num = [ 4, 5, 6, 33, 18, 109]

// classic for
for (let elem=0;elem<num.length;elem++){
    console.log(num[elem])
}


// for-in with array for iteration
for (let ind in num){ 
    // console.log(num[ind])  
    // here 'ind' will return index 
}



// for-of with array for iteration
for (let ele of num){
    // console.log(ele)  
    // here 'ele' will return element
}



// for-each with arrow-function on array
num.forEach ((element) =>{
    // console.log(element)
})




// do-while on array
let arra7 = [1,4,7,8,10], a
do{
    a = prompt("enter num")
    a = Number.parseInt(a)
    arra7.push(a)

}while(a!=0)

console.log(arra7)