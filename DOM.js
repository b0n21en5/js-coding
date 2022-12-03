// DOM manipulation can be shown in web pages


console.log(document.body)  // document body of html


document.body.style.background = 'red'  // will change the backgrounf color to red


 //getElementById is a method & innerHTML is a property
document.getElementById('demo').innerHTML = "Hello World!";  




// changing background color based on user input
let color = prompt("Enter the page color")
document.body.style.background = color
