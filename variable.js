// javascript is Dynamic language with Dynamic variable type 


//three types of variable are there in js: let, const, var


let r = 8   //fixed value like num or string are called Literals
let q = 9

let s = r + q   //variable values are called Variables



let x;    //variable with undefined value

// const tu;    //const declarations must be initialized


x="name"
console.log(x)




// let variable is changeable
let a = 7  //let variable with int datatype


// var is for old browser
var b = "String"  //var variable with string datatype


//const variable is fixed
const bool = true   //const variable with boolean datatype


// undeclared variable
c = 78

console.log(a)
console.log(b)
console.log(bool)
console.log(c)


let d = 5+ 8 + "5"  //quotation int will be treated as string & concatenate

console.log(d)  //





let f = null
console.log(f)



//let scope is on bolck level 
{
    let a = "India"
    console.log("Let inside block: ",a)
}


// let a = 90  //let cant be re-declarable
console.log("Let outside block: ",a)



//defining variable with var creates global variables

// variable declared without let & const is global variable
{
    boy = "Bikash";
}
console.log("boy becomes global here",boy);



// null
let useLess = null;
console.log(typeof(useLess));  // null is a bug



// NaN
let num = 9876543210;

 // isNaN checks whether value is a num  or not
console.log(isNaN(num)); 