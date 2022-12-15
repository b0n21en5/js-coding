
// Callback is a function passed as an
//  argument in another function



// array of numbers
const myNumbers = [1, -9, 4, 5, 12, -7, -23, 0, 8];


// this method return boolean based on condition
function positive(x){
    return x >= 0;
}


// positive is here a callback function
const posNumbers = removeNeg(myNumbers, positive);

console.log(posNumbers);



// callback function is used in this function
function removeNeg(numbers, callback){

  const pos = [];

  for (const x of numbers){
    if (callback(x)){
      pos.push(x);
    }
  }

  return pos;

}


