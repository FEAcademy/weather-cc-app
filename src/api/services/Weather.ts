import weatherClient from 'api/client';
import { WeatherSuccessResponse } from 'mocks/mockData';
import { useQuery } from 'react-query';

export default {
  useCity: (cityName: string) =>
    useQuery<WeatherSuccessResponse>(['current_weather_by_city', cityName], async () => {
      const { data } = await weatherClient.get<WeatherSuccessResponse>('/current.json', {
        params: { q: cityName, aqi: 'yes' },
      });
      return data;
    }),
};
