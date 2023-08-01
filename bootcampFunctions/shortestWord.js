export default function shortestWord(sentence) {
    let word = sentence.split(" ");
    let shortestWord = word[0];
        console.log(word);
        for (let i in word) {
        if (word[i].length <= shortestWord.length) {
            shortestWord = word[i];
        }
    }
     return shortestWord;
}
// console.log(shortestWord("The dog barked loudly at the cat up the tree"));


