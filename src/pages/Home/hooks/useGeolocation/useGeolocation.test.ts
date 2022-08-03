import { positionData } from 'mocks/mockData';
import { mockNavigatorGeolocation, renderHook, act, waitFor } from 'test-utils';
import { useGeolocation } from './useGeolocation';

describe('useGeolocation', () => {
  const { getCurrentPositionMock } = mockNavigatorGeolocation();

  it('should return correct coordinates on success', async () => {
    getCurrentPositionMock.mockImplementation((success) => success(positionData));

    const { result } = renderHook(() => useGeolocation());

    act(() => {
      result.current[1]();
    });

    await waitFor(() => expect(result.current[0]).toMatchObject({ latitude: 34.5, longitude: 55.2 }));
  });

  it('should return incorrect coordinates on error', async () => {
    getCurrentPositionMock.mockImplementation((_, rejected) => rejected({}));

    const { result } = renderHook(() => useGeolocation());

    await waitFor(() => expect(result.current[0]).toEqual(null));
  });
});
