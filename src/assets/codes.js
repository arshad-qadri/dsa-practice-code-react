import {
  calendarCode,
  factorial,
  findVowel,
  functionForTakeCharacterFromCharIndexToAbove5Index,
  palindrome,
  primenumber,
  progressBar,
  promiseFunctionInvolkedAfter5Seconds,
  smallestWord,
  twoDimensionalarraytoSingleWithObject,
} from "./codeString";

export const codes = [
  {
    question: "Create promise function which will involked after 3 second.",
    codeString: promiseFunctionInvolkedAfter5Seconds,
    language: "javascript",
  },
  {
    question:
      "Create a function that takes two parameters: a string and a number. Based on the string, retrieve characters at indices that are multiples of 5, starting from the provided index.",
    codeString: functionForTakeCharacterFromCharIndexToAbove5Index,
    language: "javascript",
  },
  {
    question:
      "Write a program to check if a string or word or number is palindrome ?",
    codeString: palindrome,
    language: "javascript",
  },
  {
    question:
      "Find vowel in given string.",
    codeString: findVowel,
    language: "javascript",
  },
  {
    question:
      "Find factorial number. ",
    codeString: factorial,
    language: "javascript",
  },
  {
    question:
      "Find prime number.",
    codeString: primenumber,
    language: "javascript",
  },
  {
    question:
      "Find smallest word in array.",
    codeString: smallestWord,
    language: "javascript",
  },
  {
    question:
      "How to make calendar?",
    codeString: calendarCode,
    language: "javascript",
  },
  {
    question:
      "How to make progress bar?",
    codeString: progressBar,
    language: "javascript",
  },
  {
    question:
      "Convert 2 diamenasional array in single with object.",
    codeString: twoDimensionalarraytoSingleWithObject,
    language: "javascript",
  },
];
