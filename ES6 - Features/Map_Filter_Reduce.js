let num = [1, 2, 44, 15, 12, 6, 10, 19, 25, 3]


// Array Map method creates a new array 
// while iterating through source array
let newArray = num.map((element, index, num) =>{
    // console.log(element, index)
    return element + 100
})

console.log(newArray)



// Array Filter method filters array based on condition
let array2 = num.filter((value)=>{
    return value > 15
})
console.log(array2)



// Array Reduce method sums up whole elements works with number
let sum = num.reduce((val1, val2)=>{
    return val1 + val2
})

console.log(sum)


