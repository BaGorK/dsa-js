# Problem Solving Patterns for Technical Interviews: the Frequency Counter Pattern Explained

- The Frequency Counter pattern uses an object or set to collect values and the frequency of those values.

- This pattern is often used with an array or a string, and allows you to avoid nested loops (quadratic time complexity O(n²)).

## When should I use the Frequency Counter Pattern?

- The Frequency Counter pattern is most helpful when you have multiple pieces of data that you want to compare with one another. Let me walk you through an example to see the Frequency Counter in action.

### The "sameSquared" exercise

- Write a function called sameSquared which accepts two arrays
- The function should return true if every value in the first array has its corresponding value squared in the second array
- The frequency of the values must be the same

```js
function sameSquared(first, second) {
  // Check edge cases
  if (!first || !second) return false;

  // By checking the length property on both parameters, we can determine if they are the same
  if (first.length !== second.length) return false;

  // Build a "dictionary" to avoid nested loops
  const lookup = {};
  for (let val of first) {
    lookup[val ** 2] = (lookup[val ** 2] || 0) + 1;
  }

  // {
  // 1: 1,
  // 4: 2,
  // 9: 1
  // }

  for (let val of second) {
    if (!lookup[val]) return false;
    lookup[val] -= 1;
  }

  return true;
}

sameSquared([1, 2, 3, 2], [4, 1, 9, 4]); // true
```

### The "isAnagram" exercise

- Write a function called isAnagram which accepts two strings
- The function should return true if the two strings parameters are anagrams of each other

```js
function isAnagram(firstStr, secondStr) {
  if (!firstStr || !secondStr) return false;
  if (firstStr.length !== secondStr.length) return false;

  const lookup = {};

  for (let first of firstStr) {
    lookup[first] = (lookup[first] || 0) + 1;
  }

  for (let second of secondStr) {
    if (!lookup[second]) return false;
    lookup[second] -= 1;
  }
  return true;
}

isAnagram(“silent”, “listen”); // true
```
