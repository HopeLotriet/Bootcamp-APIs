export default function wordLengths(sentence) {
    let sum = 0;
     let word = sentence.split(" ");
    console.log(word);
    for (let i in word) {
            sum += word[i].length;
 }
   return sum;
}
// console.log(wordLengths("The dog barked loudly"))
