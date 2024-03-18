/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/
  //pass in text used to the constructor function

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    //create new map datastructure
    let chainMap = new Map();
//iterate over this.words and the word next to this.words
    for (let i=0; i<this.words.length; i++) {
      let word = this.words[i];
      console.log(word);
      let nextWord = this.words[i + 1] || null;
  //check if map already contains the key word; if it does, add nextWord to value array associate with key;
      if (chainMap.has(word)) {
        let value = chainMap.get(word);
        value.push(nextWord);
        chainMap.set(word, value);
      } else {
    //if the key is not already in the map, create key value pair with the word and next word; the value should be an array
        chainMap.set(word, [nextWord]);
      }
    }
    console.log(chainMap);
    this.chainMap = chainMap;
  }


  // static choice(ar) {
  //   return ar[Math.floor(Math.random() * ar.length)];
  // }

  static randomWord(newArray) {
    return newArray[Math.floor(Math.random() * newArray.length)];
  }
  //   return chainMap[Math.floor(Math.random() * chainMap.length)];
  // }


  // makeText(numWords = 100) {
  //   // pick a random key to begin
  //   let keys = Array.from(this.chains.keys());
  //   let key = MarkovMachine.choice(keys);
  //   let out = [];

  makeText(numWords = 20) {
    //create array of keys from chainMap
    let keys = Array.from(this.chainMap.keys());
    console.log(keys)
    //get item in array using index
    let randomKey = MarkovMachine.randomWord(keys);
    console.log(randomKey)
    //delcare an empty array
    let sentence = [];


    while (sentence.length < numWords && randomKey !== null) {
      //push the randomKey to the sentence array
      sentence.push(randomKey);
      console.log(sentence)
      //get random value from array using the random key.  that value will be the next key that is pushed to the sentence array.
      //########################don't redeclar randomkey; just reassign
      randomKey = MarkovMachine.randomWord(this.chainMap.get(randomKey));
    }
//turn array into a string using the .join method
    return sentence.join(" ");
  }
}



module.exports = { MarkovMachine:MarkovMachine }

