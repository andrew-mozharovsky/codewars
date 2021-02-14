/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/
const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const test = [];

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  return [input.filter(element => element > 0).length].concat([
    input
      .filter(element => element < 0)
      .reduce((acc, element) => {
        return (acc += element);
      }, 0),
  ]);
}

console.log(countPositivesSumNegatives(test));
