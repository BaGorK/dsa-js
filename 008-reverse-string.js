// Solution 1
function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join the array into a string
  return str.split('').reverse().join('');
}

// Solution 2
function reverseString(str) {
  // Declare a variable to store the reversed string
  let reversed = '';

  // Loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversed += str[i];
  }

  // Return the reversed string
  return reversed;
}

// Solution 3
function reverseString(str) {
  let reversed = [];

  for (let c = 0, j = str.length - 1; c < str.length, j >= 0; j--, c++) {
    reversed[j] = str[c];
  }

  return reversed.join('');
}
