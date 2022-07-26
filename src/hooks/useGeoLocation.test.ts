import { useGeoLocation } from 'hooks/useGeoLocation';
import { positionData } from 'mocks/mockData';
import { renderHook, act } from 'utils/custom-render';

describe('useGeoLocation', () => {
  const mockGetCurrentPosition = {
    getCurrentPosition: jest.fn().mockImplementationOnce(() => Promise.resolve(positionData)),
  };

  it('should return correct coordinates', () => {
    (global as any).navigator.geolocation = mockGetCurrentPosition;
    const { result } = renderHook(() => useGeoLocation());

    act(() => {
      result.current[1]();
    });

    setTimeout(() => {
      expect(result.current[0]).toMatchObject({ latitude: 34.5, longitude: 55.2 });
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
