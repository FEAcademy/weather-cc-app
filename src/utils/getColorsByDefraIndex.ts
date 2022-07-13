import { DefraIndex } from 'enums/DefraIndex';

const getColorsByDefraIndex = (i: number): DefraIndex => {
  if (i > 3 && i <= 6) return DefraIndex.Moderate;
  if (i > 6 && i <= 9) return DefraIndex.High;
  if (i >= 10) return DefraIndex.VeryHigh;

  return DefraIndex.Low;
};

export { getColorsByDefraIndex };
