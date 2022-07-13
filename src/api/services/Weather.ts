import { useQuery } from 'react-query';
import { Weather } from 'models/Weather';
import { Location } from 'models/Weather';
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
  useSearchCities: (cityName: string) =>
    useQuery<Location, Error>(['location', cityName], async () => {
      const res = await weatherClient.get<Location>('/search.json', {
        params: {
          q: cityName,
        },
      });
      return res.data;
    }),
};
