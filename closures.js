//
// A Closure is a combination of function bundled together(enclosed) 
// to its surrounding state(the laxical environment). other words, closure
// gives u access to outer function's scope from an inner function
//



function init(){
    let message = "Good Morning"

    console.log("Regular Function msg: " + message)

    function displayMessage(){
        console.log("Message is: " + message + " from Closure")
    }

    message = "Good Evening"
    return displayMessage;
}


// we need to put double parenthesis toinvoke closure 
// init()()


// it can be done like this too
// c = init()  // creating another variable
// c()  // invoking with new var name






// different approach of closure
// function func() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }


//     displayName();   // function is called from inside
//   }
//   func();




returnFunc = () =>{
  const x = () =>{
    let a = 1
    console.log(a)
    const y = () =>{
        // let a = 2
        console.log(a)
        const z = () =>{
            // let a = 3
            console.log(a)
        }
        z()
    }
    a = 564
    y()
  }

  x()
}

returnFunc()