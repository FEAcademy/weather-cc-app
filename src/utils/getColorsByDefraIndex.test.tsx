import { DefraIndex } from 'enums/DefraIndex';
import { getColorsByDefraIndex } from './getColorsByDefraIndex';

describe('getColorsByDefraIndex', () => {
  it('should return valid defra index', () => {
    expect(getColorsByDefraIndex(1)).toBe(DefraIndex.Low);
    expect(getColorsByDefraIndex(6)).toBe(DefraIndex.Moderate);
    expect(getColorsByDefraIndex(9)).toBe(DefraIndex.High);
    expect(getColorsByDefraIndex(10)).toBe(DefraIndex.VeryHigh);
  });
});
