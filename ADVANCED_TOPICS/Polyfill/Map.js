// Polyfill for Map Function

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    // Error if no Callback Function
    if (!callback) {
      throw new ReferenceError("Callback Function is not Found!");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a Function!");
    }

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }

    return newArray;
  };
}

// Example usage:
const nums = [8, 6, 7, 3, 2, 1];

// Using the myMap polyfill
const numsFiltered = nums.myMap((val) => val - 1);

console.log(numsFiltered);
