// functions in javascript is a chunk of code functions increases
// code readability, reuseability, extensibility, testing, abstracting




//function without parameter
function programmer(){
    console.log("Programmer is a person who solves particular problem & splits it in small steps")
}


programmer()     // invoking function should be done by function name with '()'

// if u invoke function without '()' parenthesis it will return function definition
console.log(programmer)  





// Arrow-function works like variable functions   ******
const arrowADD = (w, x, y, z) =>{
    return w * x * y * z
}

let multiply = arrowADD(5,7, 8, 10)

console.log("Multiplication of nums is " + multiply)








// parameterized function
function addFunc(x, y){
    return x+y
}

// let a = prompt("first num")
// let b = prompt("second num")
// console.log("sum of 7 & 8 is "+addFunc(a, b))    //invoking




function toCelsius(farenheit){
    return (5/9) * (farenheit-32)
}

farenheit = 92
celsius = toCelsius(farenheit)

console.log(farenheit + "  farenheit in celsius is " + celsius + "'C")
