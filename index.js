const { readFile } = require('fs').promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;
  
  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  // Your code goes here
  const poemOne = await readFile("poems/starting-poem.txt", "utf-8" )
  console.log(poemOne)
  mostFrequentWord(poemOne)
  let poemTwoName = mostFrequentWord(poemOne)
  

}

findPassword();
