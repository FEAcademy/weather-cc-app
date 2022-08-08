import { generateCacheKey } from './generateCacheKey';

describe('generateCacheKey', () => {
  it('should return valid key', () => {
    const bounds = '(50.72167742756552,16.311950683593754,51.48993452350156,17.76351928710938)';

    expect(generateCacheKey(bounds)).toMatchObject([51, 16, 51, 18]);
  });
});
