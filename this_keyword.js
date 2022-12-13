// this is a reserved keyword in js & used to refer to an object
// which object is depends on how this is being invoked


// this alone acts as global object

// this inside an object inside a function refers to function

// this inside an event refers to an element who takes it


const person = {
    firstName : "John",
    lastName : "Doe",
    age : 52,
    height : 6,
    weight : 89,
    fullName : function(){
       return this.firstName + " " + this.lastName
    }
}

console.log(person.fullName())

console.log(person.weight+ "-kg")