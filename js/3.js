/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/

function arrayDiff(a, b) {
  return a.filter(val => b.indexOf(val) === -1);
}

console.log(
  arrayDiff([20, -10, 19, -19, -14, 4, 12, -11, 5, 2, 13, -14], [-19, -10, 4]),
);
