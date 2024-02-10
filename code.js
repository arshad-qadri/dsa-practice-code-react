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

console.log(findSmallestWord(words)); // Output: kiwi
