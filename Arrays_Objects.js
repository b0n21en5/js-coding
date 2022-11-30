// const keyword will make sure that the reference
// of the Array or object is immutable but elements are


// Arrays elemnt can add & also changed
const bikes = ["Splender", "Hero", "Tvs"]

//value is changing by assigning new value to particular index
bikes[0] = "Super Splender"  

bikes[1] = "Hero Honda"


// modifies array with new element & also increase the length
bikes.push("Kawasaki")   
bikes.join("Ninja")

// console.log(bikes)

// value can be added with new index value, it will increase length
bikes[5] = 'hayabusa'  





// console.log('length of array is: '+bikes.length)


// returns undefined for non-existing index
// console.log("not denined in array: " + bikes[9])   







// Array methods  


const int_arr = [1, 5, 8, 14, 7, 88, 910]



// join add char in between every element of the array
// let c = int_arr.join(" and ")  
// console.log(c)


let b = int_arr.toString()  // converts numbers into string
// console.log(typeof b)



int_arr.pop()  // removes last elements from array
// console.log(int_arr)




int_arr.shift()  //shift removes first element from the array
// console.log(int_arr)


// unshift adds new element to start & modifies length
int_arr.unshift(89)  
// console.log(int_arr)






//deletes particular element from array but
// does not effect length of the array
delete int_arr[0]   
// console.log(int_arr[0])



// array concatenation
let newArr = int_arr.concat(b)
// console.log(newArr)




// sorting in ascending order using compare method
let compare = (a, b) =>{
    return b - a
}

let num = [ 54, 5, 6, 4, 28, 30, 12, 1, 0]


// sorts the array alphabetically, compare used for numerical sorting
num.sort(compare) 

// console.log(num)



num.reverse()
// console.log(num)



// Slicing will create new array without effecting source array
newNum = num.slice(3, 9)  
// console.log(newNum)



// Splicing will modify source array
num.splice(3, 2, 1009, 7023, 8884, 500)
// console.log("modified source Array= "  + num)





// looping with array


// classic for
for (let elem=0;elem<num.length;elem++){
    console.log(num[elem])
}

// for-in with array for iteration
for (let ind in num){ 
    // console.log(num[ind])  // here 'ind' will return index 
}



// for-of with array for iteration
for (let ele of num){
    // console.log(ele)  // here 'ele' will return element from array
}



// for-each with arrow-function on array
num.forEach ((element) =>{
    // console.log(element)
})



// Array-From creates an array from collections like html , string etc
let nam = "Souvik"
let arr = Array.from(nam)  

// console.log(arr)





// do-while on array
let arra7 = [1,4,7,8,10], a
do{
    a = prompt("enter num")
    a = Number.parseInt(a)
    arra7.push(a)

}while(a!=0)

console.log(arra7)