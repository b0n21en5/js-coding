const prevValues = [];

// memoization often uses closures as a way to
// store and access the cached results

function square(num) {
  if (prevValues[num]) return prevValues[num];
  let result = 0;

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result += 1;
    }
  }
  prevValues[num] = result;
  return result;
}

console.log(square(55555));
console.log(square(10));
console.log(prevValues);
// console.log(square(55555));
// console.log(square(55555));
// console.log(square(55555));

// Dynamic Programming often follows the Memoization Approach
function fib(num) {
  const memoiz = [];
  memoiz[0] = 0;
  memoiz[1] = 1;
  for (let i = 2; i <= num; i++) {
    memoiz[i] = memoiz[i - 1] + memoiz[i - 2];
  }

  return memoiz[num];
}

let num = 418;
// console.log('Fibonacci series: '+fib(num));
