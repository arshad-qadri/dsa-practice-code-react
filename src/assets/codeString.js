export const promiseFunctionInvolkedAfter5Seconds = `
const promiseFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello world!");
      }, 3000);
    });
};
  
promiseFunction()
    .then((result) => {
      console.log(result);  // "Hello world!"
    })
    .catch((err) => {
      console.log(err);
    });
  
`;

export const functionForTakeCharacterFromCharIndexToAbove5Index=`
const alphabates = "abcdefghijklmnopqrstuvwxyz";

const codeWars = (str, num) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = alphabates.indexOf(char);

    if (charIndex >= 0) {
      const shiftedIndex = (charIndex + num) % alphabates.length;
      result += alphabates[shiftedIndex];
    }
    
  }
};

codeWars("codewar", 5);  // output : "htijbfw"

`

export const palindrome = `
const isPalindrome = (str) => {
  str = str.toString();
  let movedWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    movedWord += char;
  }
  return movedWord == str;
};

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("abc"));  // false
console.log(isPalindrome(121));  // true

`