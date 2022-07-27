import { useQuery } from 'react-query';
import { Weather } from 'models/Weather';
import { Location } from 'models/Weather';
import { weatherClient } from '../clients';

export default {
  useCity: (cityName: string) =>
    useQuery<Weather, Error>(
      ['weather', cityName],
      async () => {
        const res = await weatherClient.get<Weather>('/current.json', {
          params: {
            q: cityName,
            aqi: 'yes',
          },
        });
        return res.data;
      },
      { enabled: !!cityName },
    ),
  useSearchCities: (cityName: string) =>
    useQuery<string[], Error>(
      ['location', cityName],
      async () => {
        const res = await weatherClient.get<Location[]>('/search.json', {
          params: {
            q: cityName,
          },
        });
        const cities: string[] = res.data.map((city) => city.name);

        return cities;
      },
      { enabled: !!cityName },
    ),
};
