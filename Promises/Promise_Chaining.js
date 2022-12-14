



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("Resolved");   // this promise resolve

        // reject('Promise reject is occurred')  //this is promise reject

    }, 300);
  });
  

myPromise
    .then((value) => {
        console.log(`${value} and bar`)
        setTimeout(() =>{
            console.log('first handler')
        }, 2000)

        return 5  // returning a int value for next handler
    })
    .then((value) => {
        console.log(`${value} and bar again`)
        setTimeout(() =>{
            console.log(`${value} and Second handler`)
        }, 2500)

        let promise2 = new Promise((resolve, reject) =>{
            setTimeout(() => { resolve("Promise2 Resolvation") }, 100)
        })
        return promise2
    })
    .then((value) => {
        console.log(`${value} and again`)
        setTimeout(() =>{
            console.log(`${value} and Third handler`)
        }, 3000)

        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve('Promise 3 has been resolved here')
            })
        })
    })
    .then((value) => {
        console.log(`${value} and again`)
        setTimeout(() =>{
            console.log(`${value} and fourth handler`)
        }, 3500)

        let val = "Some value"
        return val
    })
    .then((value) => {
        console.log(value);
        setTimeout(() =>{
            console.log(`${value} and fifth handler`)
        }, 4000)

    })
    .catch((err) => {
        console.error('Error is catched');
        setTimeout(() =>{
            console.log(err)
        }, 3000)
    });

  