// lexical this is only works with arrow function



// lexical this allows us to pass execution by using
// lexical  scoping &  lexical scoping just means that 
// it uses `this` from the code that contains arrow function

const student = name =>{
    console.log('Student name is ' + name)
}



const obj = {
    name : 'Jhilik',
    timpi : 'coke',
    jhilik : 'cake',

    show : arrFunc = () =>{
        console.log('This is an arrow function');
    },

    display : function(){

     console.log('inside display')
     
     setTimeout(() => {
        console.log(`Lexical this used here\nname is ${this.name} & favorite is ${this.jhilik}`)}, 2)
    }
}


// invoking arrow function with object
// obj.show()


// invoking student fat arrow function
// student('Sagar');


obj.display()
