function splitWords(text) {
    let words = text.split(' ');
    return words;

}
let command = 'USAR LLAVE';
let wordList = splitWords(command);

console.log(wordList[0]);
console.log(wordList[1]);