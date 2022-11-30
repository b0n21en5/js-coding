// loop is used to run some specific lines of code again & again


// for loop
for (let i=0;i<5;i++){
    console.log("iteration "+i)
}



// for-in loop is used for objects & arrays
const dict = {
    "souvik":78,
    "gourav":79,
    "sandip":87
}


for (let e in dict){
    console.log('key is ' + e+ ' & value is ' + dict[e])
}




// for-of loop is used to iterate through arrays or strings 

const cars = ['SUV', 'HondaCity', 'I20', 'RangeRover']

for (let a of cars){
    console.log(a)
}


let nam = "Kailash"
for (let f of nam){
    console.log(f)
}






// while-loop
let i=0

while(i>5){
    console.log("while loop iteration "+i)
    i++
}




// do-while loop runs 1st time & then checks condition

let j=5
do{
    console.log("do-while runs "+j)
    j--
}while(j>0)