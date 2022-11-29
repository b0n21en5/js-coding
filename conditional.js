
// prompt is used to take input from user
let age = prompt("enter your age")



// if-else conditional statement

if (age<0) console.log("Invalid age")
else if (age<=10) console.log("u are kid")
else if (age<=15) console.log("U are still kid..")
else if (age <=18) console.log("teenager")
else console.log("adult person")



// Switch- case executes particular case which matches with switch
let nam = "mayur"
switch (nam){
    case "mayur":console.log("boy name"); break
    case "nilam":console.log("girl name"); break
    default:console.log("prefer not to say")
}


// ternary operator is also a conditional statement

console.log(age>18?"adult":"Kid")