import { useGeoLocation } from 'hooks/useGeoLocation';
import { positionData } from 'mocks/mockData';
import { mockNavigatorGeolocation } from 'test-utils';
import { renderHook, act, waitFor } from 'utils/custom-render';

describe('useGeoLocation', () => {
  const { getCurrentPositionMock } = mockNavigatorGeolocation();

  it('should return correct coordinates on success', async () => {
    getCurrentPositionMock.mockImplementation((success) => success(positionData));

    const { result } = renderHook(() => useGeoLocation());

    act(() => {
      result.current[1]();
    });

    await waitFor(() => expect(result.current[0]).toMatchObject({ latitude: 34.5, longitude: 55.2 }));
  });

  it('should return incorrect coordinates on error', async () => {
    getCurrentPositionMock.mockImplementation((_, rejected) => rejected({}));

    const { result } = renderHook(() => useGeoLocation());

    await waitFor(() => expect(result.current[0]).toEqual(null));
  });
});
