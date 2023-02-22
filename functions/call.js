
// call method can be used to invoke a function
// with an owner object as an argument

const object = {
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

const object2 = {
    firstName: "APJ",
    lastName: "Kalam"
}

const object3 = {
    firstName: "Swami",
    lastName: "Vivekananda"
}

const object4 = {
    firstName: "Netaji",
    lastName: "Shubash Chandra"
}



console.log( object.fullName.call(object4) );   // call method invoke