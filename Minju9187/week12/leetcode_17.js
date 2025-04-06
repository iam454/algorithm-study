var letterCombinations = function (digits) {
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const answer = [];

  if (digits.length === 0) return [];
  const digitsSplits = digits.split("");

  function makeWords(word, index) {
    if (digits.length === index) {
      answer.push(word);
      return;
    }
    const getWords = obj[digitsSplits[index]];
    for (let i = 0; i < getWords.length; i++) {
      makeWords(word + getWords[i], index + 1);
    }
  }

  makeWords("", 0);

  console.log(answer);
};

letterCombinations("23");
