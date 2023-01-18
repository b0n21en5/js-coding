//



function sum(x, y, z) {
    return x + y + z;
  }
  
const numbers = [1, 2, 3];

console.log("sum is " + sum(...numbers));
// expected output: 6

console.log("sum is " + sum.apply(null, numbers));
// expected output: 6
  


let obj = {
    name : 'Ashish',
    salary : '300000p.m.',
    company : 'Microsoft',
    role : 'Web Pentester'
}

// correct syntax & it will override values
console.log({...obj, salary:'500000p.m.', company:'Google'})

//wrong syntax
// console.log({ salary:'500000p.m.', company:'Google', ...obj})





const parts = ['shoulders', 'knees'];

// below array will include new values with old array values
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics)