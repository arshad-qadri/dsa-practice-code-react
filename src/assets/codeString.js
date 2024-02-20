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

export const functionForTakeCharacterFromCharIndexToAbove5Index = `
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

`;

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

`;

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

`;

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

`;

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

`;
export const smallestWord = `
const words = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'watermelon'];

const findSmallestWord = (words) => {
  return words.reduce((accumulator, iterator) => {
    if (iterator.length < accumulator.length) {
      return iterator;
    } else {
      return accumulator;
    }
  });
};

console.log(findSmallestWord(words));  // Output: kiwi

`;

export const calendarCode = `
const date = new Date();
const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const startDay = startDate.getDay();
const end_date = endDate.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const today = date.getDate();
let totalDates =
  month === 1 && startDay === 0 ? 28 : end_date + startDay > 35 ? 42 : 35;
let week = 0;

// Approach 1 =>
let temp = [[]];
for (let i = 1; i <= totalDates; i++) {
  if (i >= startDay + 1 && i <= end_date + startDay) {
    if (today === i - startDay) {
      temp[week].push({ day: i - startDay, active: true, event: [] });
    } else {
      temp[week].push({ day: i - startDay, active: false, event: [] });
    }
  } else {
    temp[week].push({ day: "", active: false, event: [] });
  }
  if (
    temp[week].length === 7 &&
    temp[week][temp[week].length - 1].day &&
    temp[week][temp[week].length - 1].day !== end_date
  ) {
    week++;
    temp[week] = [];
  }
}
console.log(temp) // output;

// Approach 2 =>
let temp2 = [[]];
let week2 = 0;
for (let i = 1; i <= startDay; i++) {
  temp2[week2].push({ day: null, active: false, event: [] });
}
for (let i = 1; i <= end_date; i++) {
  if (temp2[week2].length === 7) {
    week2++;
    temp2[week2] = [];
  }
  if (i === today) {
    temp2[week2].push({ day: i, active: true, event: [] });
  } else {
    temp2[week2].push({ day: i, active: false, event: [] });
  }
}
while (temp2[week2].length < 7) {
  temp2[week2].push({ day: null, active: false, event: [] });
}
console.log(temp2) // output;

`;
export const progressBar = `
import React, { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const intervalID = useRef(null);
  useEffect(() => {
    intervalID.current = setInterval(() => {
      setProgressPercent((prev) => prev + 1);
    }, 100);
    return () => {
      clearInterval(intervalID.current);
    };
  }, []);
  useEffect(() => {
    if (progressPercent === 100) {
      clearInterval(intervalID.current);
    }
  }, [progressPercent]);
  return (
    <div className="w-96  m-auto p-4">
      <h1 className="text-center mb-3">Progress Bar</h1>
      <div className="bg-gray-100 rounded-full text-center relative overflow-hidden  w-full h-10">
        <div className={absolute top-0 left-0 w-full h-full bg-transparent z-20 flex justify-center items-center font-bold {progressPercent<=50 ?"text-black":"text-white"}}>
          {progressPercent}%
        </div>
        <div
          className="absolute  h-full bg-green-500 left-0 top-0 z-10"
          style={{ width: {progressPercent}% }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

`;
