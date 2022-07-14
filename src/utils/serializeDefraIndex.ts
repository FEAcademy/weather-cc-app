import { DefraIndex } from 'enums/DefraIndex';

const serializeDefraIndex = (index: number) => {
  if (index <= 3) return DefraIndex.Low;
  if (index <= 6) return DefraIndex.Moderate;
  if (index <= 9) return DefraIndex.High;
  return DefraIndex.VeryHigh;
};

export { serializeDefraIndex };
