const months = ['Feb', 'June', 'Nov', 'Oct', 'April', 'Dec']


// splice adds/removes elements & returns deleted element
const newMonths  = months.splice(0, 0, 'Jan')
// console.log(newMonths)


// 1st arg is at deleting starts & 2nd arg is the no of
// elements to be deleted & passing elements to be added
// console.log(months.splice(3, 1,'Dec','March'));



// slicing takes one argument from that slicing starts
// const sliceOne = months.slice(4)
// console.log(sliceOne);


// slicing start & ending index when two arguments given
const slicedMonth = months.slice(0, 3);
console.log(slicedMonth);
