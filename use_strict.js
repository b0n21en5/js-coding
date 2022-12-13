function myStrictFunction() {

    // Function-level strict mode syntax
    "use strict";

    let t;   // variables/objects must be defined in strict mode

    const obj = {
        'ram' : 32,
        'Shayam': 52
    }


    // below is a nested function
    function nested() {
      return "And so am I!";
    }
    return `Hi! I'm a strict mode function! ${nested()}`;
  }


console.log(myStrictFunction())

  // non-strict mode
  function myNotStrictFunction() {
    return "I'm not strict.";
  }
  

