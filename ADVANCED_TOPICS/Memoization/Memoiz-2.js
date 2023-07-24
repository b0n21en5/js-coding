// Memoization using Currying and Closures

function memoiz(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = fn(...args);
    cache.set(key, result);
    console.log(cache);
    return result;
  };
}

function doubleTheValue(num) {
  console.log("Performing Double Function...");
  return num * 2;
}

const memoizeCalculationFunction = memoiz(doubleTheValue);

console.log(memoizeCalculationFunction(5));
console.log(memoiz(doubleTheValue)(5));
