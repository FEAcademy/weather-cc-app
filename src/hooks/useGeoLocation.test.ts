import { renderHook } from '@testing-library/react';
import { useGeoLocation } from 'hooks/useGeoLocation';
import { positionData } from 'mocks/mockData';

describe('useGeoLocation', () => {
  const mockGetCurrentPosition = {
    getCurrentPosition: jest.fn().mockImplementationOnce(() => Promise.resolve(positionData)),
  };

  it('should return correct coordinates', () => {
    (global as any).navigator.geolocation = mockGetCurrentPosition;
    const { result } = renderHook(() => useGeoLocation());

    setTimeout(() => {
      expect(result.current[0]).toEqual({ latitude: 34.5, longitude: 55.2 });
    }, 1000);
  });

  it('should return incorrect coordinates', () => {
    (global as any).navigator.geolocation = mockGetCurrentPosition;
    const { result } = renderHook(() => useGeoLocation());

    setTimeout(() => {
      expect(result.current[0]).toEqual(null);
    }, 1000);
  });
});
