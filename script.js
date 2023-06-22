function letterCombinations(input_digit) {
  //Complete the function
   if (digits === "") {
    return [];
  }
  const mappings = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  // Recursive function to generate combinations
  function generateCombinations(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }
    const currentDigit = parseInt(remaining[0]);
    const letters = mappings[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      generateCombinations(current + letter, remaining.slice(1));
    }
  }

  generateCombinations("", input_digit);

  return result.sort();
}

module.exports = letterCombinations;
