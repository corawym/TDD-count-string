module.exports = function countString(string) {


  if ( typeof string === 'string' && string.length > 0 ){

    if ( string === ' ' ){
      throw new Error('error');
    }

    const splitString = string.split('')
    let i = 1 

    return splitString.reduce((allLetters, letter, index, array) => {
  
      if (letter !== ' '){
        if (letter === array[index-1] ){
            i++
            allLetters.pop()
            allLetters.push(i)
        }else{
          i = 1
          allLetters.push(letter,i)     
        }   
      }
      
      return allLetters
      
    }, []).join('')
    
  }
  throw new Error('error');
};