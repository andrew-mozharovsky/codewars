/*Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples:

flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]*/

const flip = (d, a) => {
  //TODO
  let resalt = [];
  if (d === 'R') {
    resalt = a.sort((a, b) => a - b);
  }
  if (d === 'L') {
    resalt = a.sort((a, b) => b - a);
  }
  return resalt;
};
console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));
