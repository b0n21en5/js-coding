const cars = [ 'mercedes', 'tuv', 'bmw']

// string array sorts alphabetically
cars.sort();
console.log(cars);



// compare function needed to sort number array

const nums = [110, 55, 1, 39];

// defining compare function
const compare = function(a, b){
    return a - b;
}

// sort takes compare as callback function
nums.sort(compare);
console.log(nums);




// reverse function
nums.reverse();
console.log("Reversed number array: ",nums);