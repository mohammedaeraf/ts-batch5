// Function to calculate factorial using normal function syntax
function calcFact(n: number): number {
  let fact = 1; // start with 1 because factorial is product
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      fact = fact * i; // multiply fact with i in each step
    }
    return fact; // return the final factorial value
  }
}

console.log(calcFact(0));
