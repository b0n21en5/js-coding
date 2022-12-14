

// uncomment to see results

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });


// Promise.all takes all promises in a single promise
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// expected output: Array [3, 42, "foo"]





const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'slow from any method'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick from any method'));
const promise3 = Promise.reject("rejection");

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"




// const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });
  // expected output: 





  // ----------------- reject__method------------------------

  function resolved(result) {
    console.log('Resolved');
  }
  
  function rejected(result) {
    console.error(result);
  }
  
  Promise.reject(new Error('fail')).then(resolved, rejected);
  // expected output: Error: fail





  Promise.reject(new Error("fail")).then(
    () => {
      // not called
    },
    (error) => {
      console.error(error); // Stacktrace
    },
  );