
// --------DOM MANIPULATION------------
let id1 = document.getElementById('div-01')
console.log(id1)




// --------------CLOSEST--------------------
const el = document.getElementById('div-03');

// the closest ancestor with the id of "div-02"
console.log(el.closest('#div-02')); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest('div div')); // <div id="div-03">




// --------------CONTAINS-------------------

console.log('id1 contains id3: '+id1.contains(el))
console.log('id3 contains id1: '+el.contains(id1))




// ---------------MATCHES--------------------

const birds = document.querySelectorAll('li');

for (const bird of birds) {
  if (bird.matches('.endangered')) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}
