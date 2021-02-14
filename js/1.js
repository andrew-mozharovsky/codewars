/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

const arr = [1, 2, 2];

function squareSum(numbers) {
  return numbers.reduce((acc, number) => {
    acc += Math.pow(number, 2);
    return acc;
  }, 0);
}

// const pow = arr.reduce((acc, number) => {
//   acc += Math.pow(number, 2);
//   return acc;
// }, 0);

console.log(squareSum(arr));
