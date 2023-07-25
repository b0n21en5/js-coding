// console.time() and console.timeEnd()
// logs time taken by any block of code

const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  console.time("calculations");
  const result = performCalculations();

  document.getElementById("result").textContent += result;

  console.timeEnd("calculations");
});

// Function to cause Performance issues
function performCalculations() {
  let result = 0;

  for (let i = 1; i <= 1000000000; i++) {
    result += i;
  }
  return result;
}
