// import { weatherSuccessResponse } from 'mocks/mockData';
import { ProvidersCombined } from 'ProvidersCombined';
import { renderHook, waitFor } from 'test-utils';
import Weather from './Weather';

describe('Weather service', () => {
  it('should return weather data with icon size of 128x128', async () => {
    const { result } = renderHook(() => Weather.useLocation('Wroclaw'), { wrapper: ProvidersCombined });

    await waitFor(() => {
      console.log(result.current.data?.current.condition.icon);
      expect(result.current.data?.current.condition.icon).toBe('//cdn.weatherapi.com/weather/128x128/day/113.png');
    });
  });
});
