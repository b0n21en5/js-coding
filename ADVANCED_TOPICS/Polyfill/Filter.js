// Polyfill for Filter Function

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a Function!");
    }

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) newArray.push(this[i]);
    }

    return newArray;
  };
}

// Example usage:
const nums = [5, 3, 9, 77];

// Using the myFilter polyfill
const filteredNums = nums.myFilter((n, ind, arr) => {
  console.log(ind + " : " + arr);
  return n > 9;
});

console.log(filteredNums);
