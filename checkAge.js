let age = 0

function alt() {
   age = prompt("Enter age")
  age = Number.parseInt(age)
  if (age<=0){
    console.error('age cant be that')
  }
  else if (age>=18){
    alert('You can Drive')
  }
  else{
    alert("You cannnot Drive")
  }
}

let run = true
while (run) {
  alt()
  run = confirm("want to play again?")
}
