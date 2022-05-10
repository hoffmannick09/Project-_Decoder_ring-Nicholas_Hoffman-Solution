// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

//set alphabet to empty string default; will return false because it isnt equal to 26 in length
  function substitution(input, alphabet = '', encode = true) {
    
    if ( alphabet.length !== 26 ) {
      return false
    }
    let finalStr = ''
    let inputStr = input.toLowerCase()
    const regularAlphabet = 'abcdefghijklmnopqrstuvwxyz' ;

    let alphabetArray = alphabet.split('')
    let sortedAlphabet = alphabetArray.sort( ) ;
    for ( let i = 0; i < sortedAlphabet.length; i++ ) {
      if ( sortedAlphabet[i] === sortedAlphabet[i+1] ) {
        return false;
      }
    }

    if (encode) {
      //loop that goes through each item (letter) of a thing (inputStr)
      for ( let letter of inputStr ) {
        let currentIndex = regularAlphabet.indexOf(letter)
        //pushes all characters into the finalStr
        if (currentIndex < 0) {
          finalStr += letter;
          continue;
        }
        finalStr += alphabet[currentIndex]
      }
    }


    if (!encode) {
      for ( let letter of inputStr) {
        let currentIndex = alphabet.indexOf(letter)
        if (currentIndex < 0) {
          finalStr += letter;
          continue;
        }
        finalStr += regularAlphabet[currentIndex]
      }
    }
    return finalStr
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
