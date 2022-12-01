// set is collection of items but 
// only contains unique values


let id = new Set(['b', 'a', 'z', 't', 'a', 'b'])


id.add('o')   //adds elements 
id.add('t')
id.add('q')



console.info(id.has('m'))  //checks whether exited in set & returns boolean 

id.delete('b')  // removes element from set


// console.info(id.values())


id.forEach(element => {
    // console.log(element)
});

id.forEach(function(ele){
    // console.info(ele)
})


for (const x of id.values()){
    console.log(x)
}



// console.log(id.size)   //length of the set