import { positionData, ipLookupData } from 'mocks/mockData';
import { ProvidersCombined } from 'ProvidersCombined';
import { mockNavigatorGeolocation, renderHook, act, waitFor } from 'test-utils';
import { useGeolocation } from './useGeolocation';

describe('useGeolocation', () => {
  const { getCurrentPositionMock } = mockNavigatorGeolocation();

  it('should return correct coordinates on success', async () => {
    getCurrentPositionMock.mockImplementation((success) => success(positionData));

    const { result } = renderHook(() => useGeolocation(), { wrapper: ProvidersCombined });

    act(() => {
      result.current[1]();
    });

    await waitFor(() => expect(result.current[0]).toMatchObject({ latitude: 34.5, longitude: 55.2 }));
  });

  it('should return ip lookup coordinates on error', async () => {
    getCurrentPositionMock.mockImplementation((_, rejected) => rejected());

    const { result } = renderHook(() => useGeolocation(), { wrapper: ProvidersCombined });

    act(() => {
      result.current[1]();
    });

    await waitFor(() => expect(result.current[0]).toEqual({ latitude: ipLookupData.lat, longitude: ipLookupData.lon }));
  });
});
