import { ProvidersCombined } from 'ProvidersCombined';
import { renderHook, waitFor } from 'test-utils';
import Weather from './Weather';

describe('Weather service', () => {
  it('should return ip lookup coordinates on error', async () => {
    const { result } = renderHook(() => Weather.useLocation('Wroclaw'), { wrapper: ProvidersCombined });

    await waitFor(() =>
      expect(result.current.data?.current.condition.icon).toEqual('//cdn.weatherapi.com/weather/128x128/day/113.png'),
    );
  });
});
