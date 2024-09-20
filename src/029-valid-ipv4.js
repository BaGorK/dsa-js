// Solution option 1
const isValidIPv4 = (ip) => {
  if (ip.split('.').length !== 4) return false;

  ip.split('.').forEach((val) => {
    if (val < 0 || val > 255) return false;
  });

  return true;
};
console.log(isValidIPv4('1.2.3.4'));
console.log(isValidIPv4('123.45.67.89'));
console.log(isValidIPv4('1.2.3'));
// console.log();

// Solution 2
const isValidIPv4_2 = (input) => {
  // Split the input string into an array of octets.
  const octets = input.split('.');
  // If the input string does not contain exactly 4 octets, return false.
  if (octets.length !== 4) {
    return false;
  }
  // Otherwise, return true if every octet is a number between 0 and 255.
  return octets.every((octet) => {
    const num = parseInt(octet); // Convert the octet to a number.
    return num >= 0 && num <= 255 && octet === num.toString(); // Return true if the octet is between 0 and 255 and the octet is equal to the number converted back to a string.
  });
};
