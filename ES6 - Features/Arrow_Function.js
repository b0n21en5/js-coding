
// arrow function defines with arrow sign
const sayHello = (name, greet) =>{
    console.log(greet + ', Hello, ' + name)
}

sayHello('Bikash', 'GoodAfterNoon')



// arrow functions does not have arguments
//  binding like regular functions

// let myFunc = {  
//     showArgs : () => {      // gives error cz no arguments binding
//     console.log(...arguments); 
//    } 
//   }; 
//   myFunc.showArgs(1, 2, 3, 4);   




// arrow function can not be invoked with
// new keyword like regular functions

// let add = (x, y) => console.log(x + y);
// new add(2,3);     // will give error




// duplicate parameter name in arrow functions are invalid
const add = (x, x) => {
    console.log(x + x);
}