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





// creating an array from collections like html , string etc
let nam = "Souvik"
let arr = Array.from(nam)  

// console.log(arr)
