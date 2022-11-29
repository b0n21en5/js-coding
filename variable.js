// javascript is Dynamic language with Dynamic variable type 


//three types of variable are there in js: let, const, var



let x;    //variable with undefined value

// const tu;    //const cant be undefined


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
    console.log(a)
}


// let a = 90  //let cant be re-declarable
console.log(a)
