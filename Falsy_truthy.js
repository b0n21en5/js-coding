// except false there are total 5 falsy
// values: undefined, "", 0, null, NaN

// any value except these values is true



// assigning false values to variables
let Undefined;
let num = 0;
let str = "";
let Null = null;
let nan = NaN;


// checking values with ternery operator
console.log((Undefined?'true':'false')+' from undefined');
console.log((num?'true':'false')+' from 0');
console.log((str?"true":'false')+' from empty string');
console.log((Null?"true":"false")+' from null');
console.log((nan?"true":'false')+' from NaN');
