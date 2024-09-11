// Solution 1
function validAnagrams(str1, str2) {
  // Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the first string
  const freqCount1 = str1.split('').reduce((acc, char) => {
    // Increment the frequency of the character or initialize it to 1 if not present
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  // Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the second string
  const freqCount2 = str2.split('').reduce((acc, char) => {
    // Increment the frequency of the character or initialize it to 1 if not present
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  // Compare the two objects of character frequencies by checking if the frequency of each character in the first object is equal to the frequency of the same character in the second object
  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}

// Example usage:
const result = validAnagrams('listen', 'silent');
console.log(result); // Output: true


// Solution 2
const validAnagrams = (string1, string2) => {
  if (!string1 || !string2) return false;

  if (string1.length !== string2.length) return false;

  // count the occurrence of letters in a word key -> letter, value -> num of occurrence
  const counterObj = {};

  for (let i = 0; i < string1.length; i++) {
    let char = string1.at(i);

    counterObj[char] = (counterObj[char] || 0) + 1;
  }
  console.log(counterObj); //{ l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }


  for (let i = 0; i < string2.length; i++) {
    let char = string2.at(i);

    // check for each char of the seconde string,
    if (!counterObj[char]) return false;
    else {
      counterObj[char] = counterObj[char] - 1;
    }
  }

  return true;
};

console.log(validAnagrams('listen', 'silent')); // true
console.log(validAnagrams('hello', 'world')); // false
console.log(validAnagrams('astronomer', 'moonstarer'));
