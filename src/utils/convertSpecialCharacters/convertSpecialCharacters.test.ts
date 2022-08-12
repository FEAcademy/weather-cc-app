import {convertSpecialCharacters} from './convertSpecialCharacters';

describe('convertSpecialCharacters', () => {

  it('should replace spacial characters', () => {
    
    expect(convertSpecialCharacters('Wołów')).toBe('Wolow');
  });
});
