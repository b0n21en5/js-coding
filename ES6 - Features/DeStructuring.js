//
// destructuring assignment syntax is a javascript
// expression that makes it possible to unpack values from array,
// or propierties from objects into distinct variables 
//


let arr  =  [1,5,7,1, 36, 45, 7]


//destructuring syntax
let [a, b , c, d, ...rest] = arr  // var will have individual value & rest will be in array

console.log(a, b, c, d, rest)



// un-initialized values will not taken
let [e, , , ...restValue] = arr
console.log(a, restValue)



// different syntax of destructuring
let {p, q} = {p:5, q:8}
console.log(p, q)