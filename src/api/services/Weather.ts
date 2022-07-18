import { useQuery } from 'react-query';
import { Weather } from 'models/Weather';
import { weatherClient } from '../clients';

export default {
  useCity: (cityName: string) =>
    useQuery<Weather, Error>(['weather', cityName], async () => {
      const res = await weatherClient.get<Weather>('/current.json', {
        params: {
          q: cityName,
          aqi: 'yes',
        },
      });
      return res.data;
    }),
};
