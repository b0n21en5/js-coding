let n = Math.floor(Math.random() * 30)
for (let i = 1; i <= 100; i++) {
  let ch = prompt("Enter your number: ")

  if (ch == n) {
    console.log('You got it, ' + n + ' is correct')
    break
  }
  else {
    console.log('try again\n' + (100 - i) + ' chances left')
  }
}