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
  try {
    const poemOne = await readFile("poems/starting-poem.txt", "utf-8");
  } catch (err) {
    console.log("unable to load poemOne");
    return;
  }
  let poemTwoName = mostFrequentWord(poemOne);
  try {
    const poemTwo = await readFile(`poems/${poemTwoName}.txt`, "utf-8");
  } catch (err) {
    console.log("unable to load poemTwo");
    return;
  }
  let poemThreeName = mostFrequentWord(poemTwo);
  try {
    const poemThree = await readFile(`poems/${poemThreeName}.txt`, "utf-8");
  } catch (err) {
    console.log("unable to load poemThree");
    return;
  }
  console.log(mostFrequentWord(poemThree));
  

}

findPassword();
