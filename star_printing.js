let lines = prompt('how many lines of stars do u want? ')

for( let i=0; i<lines; i++){
    let stars = ""
    for (let j=0;j<=i;j++){
        stars += '*'
    }
    console.log(stars)
}