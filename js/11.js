/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique*/

function findUniq(arr) {
    // do magic
    const resalt = arr.filter((element, index, arr) => arr.indexOf(element) === arr.lastIndexOf(element))
     return resalt[0]
  }


  console.log(findUniq([ 0, 1, 0 ])) ;
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) 
  console.log(findUniq([ 3, 10, 3, 3, 3 ])) 