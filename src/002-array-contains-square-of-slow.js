/*

same([1,2,3], [4,2,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false

we use nested loops to check if the square of each value in the first array is present in the second array. If it is, we remove it from the second array. If the second array is empty at the end, we return true. If not, we return false.


time-complexity: O(n^2)
1st) for loop
2nd) indexOf also loops over the array 
so it's O(n^2)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
