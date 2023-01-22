/**
 * 
 * @param {string} word 
 * @returns 
 */

function firstLetterToUpperCase(word) {
  let [firstLetter, ...rest] = word;

  word = [firstLetter.toUpperCase(), ...rest];
  return word.join("");
}

export default firstLetterToUpperCase;
