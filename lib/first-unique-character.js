module.exports = function firstUniqueCharacter(input) {

  if ( typeof input === 'string' && input.length > 0 ){

    const justCharacter = input.replace(/\s+/g, '').split('')

    return justCharacter.filter((element, index, array)=>{ 
      return (
        array.indexOf(element) === array.lastIndexOf(element)
        ); 
    }).shift()

  }
  throw new Error('error');
}