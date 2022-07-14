import { DefraIndex } from 'enums/DefraIndex';
import { serializeDefraIndex } from './serializeDefraIndex';

describe('getColorsByDefraIndex', () => {
  it('should return valid defra index', () => {
    expect(serializeDefraIndex(1)).toBe(DefraIndex.Low);
    expect(serializeDefraIndex(6)).toBe(DefraIndex.Moderate);
    expect(serializeDefraIndex(9)).toBe(DefraIndex.High);
    expect(serializeDefraIndex(10)).toBe(DefraIndex.VeryHigh);
  });
});
