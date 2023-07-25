// Polyfill for forEach Method
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a Function!`);
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Example usage
const nums = [8, 6, 41, 36, 7, 0, 3];
nums.myForEach((val, ind, arr) => {
  if (val > 8)
    console.log(
      "new result: value: " + val + " index: " + ind + " array: " + arr + "\n"
    );
});
