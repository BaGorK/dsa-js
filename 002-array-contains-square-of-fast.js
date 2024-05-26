/*

// FREQUENCY COUNTER PATTERN

same([1,2,3], [4,2,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false

Big O notation: O(n) // O(n) is much faster than O(n^2)
although we have 3 loops they are not nested so it's O(n)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1, frequencyCounter2); //
  //   { '1': 1, '2': 2, '3': 1 } { '1': 1, '4': 2, '9': 1 }

  // we can loop over an object using the for-in loop
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
