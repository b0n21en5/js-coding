
// functions running in parallel with other
// functions are called asynchronus



  // setTimeout

  setTimeout(myFunction, 3000);

  function myFunction() {
    console.log("See You !!");
  }

// setTimeout is the best example


function myDisplayer(something) {
    console.log("The sum is: " + something);  // executed with myFunction
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);





