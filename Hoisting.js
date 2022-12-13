// hoisting refers to process whereby interpreter appears to move the declarations
// of functions , variables & classes to the top of the scope, prior to the
// execution of code,


// hoisting only works with var not with let & const


// variable hoisting
console.log(a)



// function hoisting
greet()


function greet(){
    console.log("Happy life")
}


var a = 8;  // declarations can be hoisted but not initilization

// let a  // does not work with let &

console.log(a)



// function expression or arrow function expression can't be hoisted
// console.log(sum(4, 6));

// const sum = (a, b) => {
//     return a + b;
// }

