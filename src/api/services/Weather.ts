import { WeatherSuccessResponse } from 'mocks/mockData';
import { useQuery } from 'react-query';
import { weatherApiClient } from '../clients';

export default {
  useCity: (cityName: string) =>
    useQuery<WeatherSuccessResponse, Error>(['weather-data', cityName], async () => {
      const response = await weatherApiClient.get<WeatherSuccessResponse>('/current.json', {
        params: { q: cityName, aqi: 'yes' },
      });
      return response.data;
    }),
};
