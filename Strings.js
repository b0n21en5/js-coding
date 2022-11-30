let nam = "John Doe"     
let b = 'Abhinav mishra'   //single & double quotes both are allowed

console.log(nam.concat(" ", b))

let ano = "this string contain's afostofi s"

let esp = "this is the \"Escape\" Character"

console.log(esp)

console.log(nam+ ' \v ' + b + '\n& ' + ano+ '\t= '+ ano.length)


let lb = "line break is \
here"
console.log(lb)



// String variable created with new keyword is a object of string
let ob = 'joshua'
let str_obj = new String('joshua')

console.log(ob.toUpperCase())

console.log(ob==str_obj?"equal":"not equal")    //'==' comapres with only values

console.log(ob===str_obj?"equal":"not equal")   //'===' compares with values & data-types too


console.log('index of u ' + ob.indexOf('u'))


// string slicing
let str = "I m future front end Developer"

console.log(str.charAt(21))

console.log(str.slice(21))  //slicing 'Developer' from whole string


console.log(str.split(" "))   // converting string to Array  ******


// string replacing
let str2 = 'JavaScript Expert'

str2 = str2.replace('JavaScript', 'JS')
console.log(str2)


// str2 = str2.replace('Java', 'JS')
// console.log(str2)


let tr = "     hello world developer    "

console.log(tr.trim())  //trims white spaces from both side


console.log(tr.includes('developer'))  // returns true if string have the character/ string




let pd = 'h'
console.log(pd.padStart(5,'i'))   //padStart creates n-1 times of character before string
console.log(pd.padEnd(5,'x'))




// String Template
let j = "kayach"
let f2 = "dibakar"

console.log(`${j} and ${f2} are very good friends`)  // String Interpolation


let sentence = "hello world developer"
let word = 'Developer'

console.log(`The word "${word}" ${sentence.includes(word)?'is':'is not'} in the Sentence`)


console.log(' sentence is starts with he: ' + sentence.startsWith('he')+ ' & ends With ee: ' + sentence.endsWith('ee'))

