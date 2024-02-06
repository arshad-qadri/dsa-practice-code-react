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

console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("abc"));  // Output: false
console.log(isPalindrome(121));  // Output: true

`

export const findVowel = `
const vowel = (str) => {
  str = str.toLowerCase();
  let vowelObject = {};
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
    ) {
      vowelCount += 1;

      if (vowelObject[str[i]]) {
        vowelObject[str[i]] += 1;
      } else {
        vowelObject[str[i]] = 1;
      }
    }
  }
  console.log(vowelObject);  // Output:  { e: 4, u: 3, o: 7, a: 3, i: 1 }
  return vowelCount;
};

console.log(vowel("Hey guy's, How are you today? I hope you are good.")); // Output: 18

`

export const factorial = `
// Solution 1
const factorial = (number) =>{
  if(number<0){
    return "Factorial is not defined for negative numbers."
  }else if(number===0 || number===1){
    return 1
  }else{
    return number * factorial(number-1)
  }
}
console.log(factorial(5));  // Output:  120

// Solution 2
const factorial = (number) => {
  let facNum = 1;
  for (let i = number; i >= 1; i--) {
    facNum *= i;
  }
  return facNum;
};
console.log(factorial(5)); // Output:  120

`

export const primenumber = `
const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(99));  // false
console.log(isPrimeNumber(13));  // true

`