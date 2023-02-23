
// apply method is just like call method, only difference
// is apply method accepts arguments as an array

const object = {
    fullName : function (city, country) {
        return this.firstName + " " + this.lastName + ", "+ city + ", " + country;
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



console.log( object.fullName.apply(object2, ["Bengaluru", "India"]) );   // apply method invoke