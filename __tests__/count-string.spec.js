
const countString = require('../lib/count-string');

describe('countString', () => {

  // function tests
  describe('when string is a type of string', () => {
    it('should return s1', () => {
      const result = countString('s');
      expect(result).toEqual('s1');
    });
  });

  describe('when string is a type of number', () => {
    it('should throw error', () => {
      expect(()=>countString(123)).toThrow();
    });
  });

  describe('when string is a type of boolean', () => {
    it('should throw error', () => {
      expect(()=>countString(true)).toThrow();
    });
  });

  describe('when string is a space', () => {
    it('should throw error', () => {
      expect(()=>countString(' ')).toThrow();
    });
  });

  describe('when string is blank', () => {
    it('should throw error', () => {
      expect(()=>countString()).toThrow();
    });
  });


  // example tests
  describe('when string is a string and length is greater than 0', () => {
    it('should return aabbcc', () => {
      const result = countString('aaabbbccc');
      expect(result).toEqual('a3b3c3');
    });
  });

  describe('when string is a string and length is greater than 0', () => {
    it('should return g1h1j1f2', () => {
      const result = countString('ghjff');
      expect(result).toEqual('g1h1j1f2');
    });
  });


});