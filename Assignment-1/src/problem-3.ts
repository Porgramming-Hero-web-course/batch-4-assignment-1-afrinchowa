function countWordOccurrences(sentence:string,word:string):number{
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    return (sentence.match(regex)||[]).length;
}

console.log(countWordOccurrences("I love typescript", "typescript"));