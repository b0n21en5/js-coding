function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
checkMail()

// handles resolve value
.then((mail) => {
    console.log(mail);
})

// handles error
.catch((err) => {
    console.error(err);
})


// finally will run regardless of error/execution
.finally(() => {
    console.log('Experiment completed');
});