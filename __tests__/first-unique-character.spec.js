const firstUniqueCharacter = require('../lib/first-unique-character');

describe('firstUniqueCharacter', () => {

  // function tests
  describe('when input is a type of string', () => {
    it('should return correct output', () => {
      const result = firstUniqueCharacter('a');
      expect(result).toEqual('a');
    });
  });

  describe('when input is a type of number', () => {
    it('should return an error', () => {
      expect(()=>firstUniqueCharacter(123)).toThrow();
    });
  });

  describe('when input is a type of boolean', () => {
    it('should return an error', () => {
      expect(()=>firstUniqueCharacter(true)).toThrow();
    });
  });

  // case test
  describe('when input is the first unique character in a string', () => {
    it('should return correct input', () => {
      const result = firstUniqueCharacter(' ddd ee efgg gh hha  ');
      expect(result).toEqual('f');
    });
  });



});