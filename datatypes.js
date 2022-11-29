// There are 7 primitive data types:
                                // string.
                                // number.
                                // bigint.
                                // boolean.
                                // undefined.
                                // symbol.
                                // null.



                            
let a = 6     //integer
let b = "string"    //String
let c = null    //null
let d = BigInt("454545")  //bigint
let e = true    //boolean
let f      //undefined
let g = Symbol("hello")  //symbol

console.log(a, b, c, d, e, f, g)


console.log(typeof f)  //checking the type of a variable


// non-primitive or object type  (objects are variables)

let val = {
    "Rishi" : 98,
    "Suman" : "failed",
    "komal" : false
}

val.Ashu = "Genius"

console.log(val.komal, val.Suman, val.Rishi, val.Ashu)
