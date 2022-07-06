import { WeatherSuccessResponse } from 'mocks/mockData';
import { useQuery } from 'react-query';
import { weatherClient } from '../clients';

export default {
  useCity: (cityName: string) =>
    useQuery<WeatherSuccessResponse, Error>(['weather', cityName], async () => {
      const res = await weatherClient.get('/current.json', {
        params: {
          q: cityName,
          aqi: 'yes',
        },
      });
      return res.data;
    }),
};
