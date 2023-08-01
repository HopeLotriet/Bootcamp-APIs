export default function longestWord(sentence) {
let word = sentence.split(" ");
let longestWord = word[0];
     console.log(word);
    for (let i in word) {
  if (word[i].length >= longestWord.length) {
    longestWord = word[i];
  }
}
return longestWord;
}
// console.log(longestWord("The dog jumped over the shipyard fence"));