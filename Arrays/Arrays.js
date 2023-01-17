// const keyword will make the array reference
// immutable but elements can be mutable


// defining an array
const bikes = ["Splender", "Hero", "Tvs"]

//value changes with new value at particular index
bikes[0] = "Super Splender"  

bikes[1] = "Hero Honda"


// push adds new element to end by increasing length
bikes.push("Kawasaki")   


// unshift adds new element to start
bikes.unshift('Bullet')  
console.log(bikes)


// pop removes last element from the array by decreasing length
bikes.pop()  


// shift removes first element from the array
bikes.shift()  
console.log(bikes)



// value can be added with new index value, if its not existed
bikes[6] = 'hayabusa'  





// console.log('length of array is: '+bikes.length)


// returns undefined for non-existing index
// console.log("not denined in array: " + bikes[9])   







// Array methods  


// join concatenates every element of the array with value
// let bikes2 = bikes.join(" and ")  
// console.log(c)



const nums = [1, 12, 56, 9, 90];

// converting array elements into string
let numString = nums.toString()  
// console.log(typeof b)






// deletes particular element from array & leaves hole,
// so that it does not effect the length of the array
// delete nums[0]   
// console.log(nums[0])



// array concatenation
// let newArr = num.concat(numString)
// console.log(newArr)




// sorting in ascending order using compare method
let compare = (a, b) =>{
    return b - a
}

let num = [ 54, 5, 6, 4, 28, 30, 12, 1, 0]


// sorts the array alphabetically, compare used for numerical sorting
num.sort(compare) 

// console.log(num)



num.reverse()
// console.log(num)



// looping with array


// classic for
for (let elem=0;elem<num.length;elem++){
    console.log(num[elem])
}

// for-in with array for iteration
for (let ind in num){ 
    // console.log(num[ind])  // here 'ind' will return index 
}



// for-of with array for iteration
for (let ele of num){
    // console.log(ele)  // here 'ele' will return element from array
}



// for-each with arrow-function on array
num.forEach ((element) =>{
    // console.log(element)
})



// Array-From creates an array from collections like html , string etc
let nam = "Souvik"
let arr = Array.from(nam)  

// console.log(arr)





// do-while on array
let arra7 = [1,4,7,8,10], a
do{
    a = prompt("enter num")
    a = Number.parseInt(a)
    arra7.push(a)

}while(a!=0)

console.log(arra7)