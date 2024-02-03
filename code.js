// 2. Write a program to check if a string or word or number is palindrome ?
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
