// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    const encoder = { a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v: 15, w:25, x: 35, y: 45, z: 55, ' ': ' '}

    const decoder = { 11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: 'i/j', 52: 'k', 13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24:'r', 34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 45: 'y', 55:'z', ' ':' '}

    //turns all inputs to lowercase
    let inputStr = input.toLowerCase()
    //blank string to add letters to 
    let finalStr = ''
    
      
    if (encode) {
      // for of loop [ for (let {variable name} of { argument in array }) to look through the letters of the array or array-like object]
      for ( let letter of input ) {
      //adds the encoder value found at 'm' to the final string
      finalStr += encoder[letter]
      }
      return finalStr
    }

    //if encode is false/if we are decoding
    if (!encode){
      //splitting all the numbers apart in the INPUT 
      let numbersToDecode = input.split('')
      //Creating a blank string to push letters into 
      let finalDecodeStr = ''
      //array with rejoind numbers that will later represent letters
      let numbersCombinedArray = []
      let numbersOnlyArray = numbersToDecode.filter((number) => number > 0)
      if (numbersOnlyArray.length % 2 == 1) {
        return false
      }

     
      //for loop that loops through the input (which has been placed in an array called numbersToDecode by .split)
      for ( let i = 0; i < numbersToDecode.length; i++) {
      //if statement that names variables greater than zero; names the item in the object and the next item and pushes them together into the combinedArray
          if ( numbersToDecode[i] > 0 ) {
              let currentNumber = numbersToDecode[i];
              let nextNumber = numbersToDecode[++i];
              numbersCombinedArray.push(currentNumber + nextNumber);
              }
              //pushes variables less than zero or special characters into the combinedArray
          else {
              numbersCombinedArray.push(numbersToDecode[i]);
      }  
    }
    //loop that looks through the numbers in the numbersCombinedArray
    for ( let number of numbersCombinedArray ) {
      //adds the numbers that were combined to the final decoded string
          finalDecodeStr += decoder[number]
    }
    return finalDecodeStr
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
