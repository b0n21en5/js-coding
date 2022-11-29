// const keyword will make sure that the reference
// of the Array or object is immutable but elements are


// Arrays elemnt can add & also changed
const bikes = ["Splender", "Hero", "Tvs"]

bikes[0] = "Super Splender"
bikes[1] = "Hero Honda"
bikes.push("Kawasaki")
bikes.join("Ninja")


// console.log(bikes[2])

for (let e in bikes){
    console.log(bikes[e])
}






//you can create & also change propierties of a object

const car = {
    type:"Fiat",
    color:"red",
    model:"Volvo"
}

car.color = "White"
car.weight = "1000kg"
console.log(car.weight)



