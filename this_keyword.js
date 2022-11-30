// this is a reserved keyword in js & used to refer to an object
// which object is depends on how this is being invoked


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