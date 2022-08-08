import { useQuery } from 'react-query';
import { AutocompleteLocation } from 'models/AutocompleteLocation';
import { Weather } from 'models/Weather';
import { weatherClient } from '../clients';

export default {
  useLocation: (location: string) =>
    useQuery<Weather, Error>(
      ['weather', location],
      async () => {
        const res = await weatherClient.get<Weather>('/current.json', {
          params: {
            q: location,
            aqi: 'yes',
          },
        });
        res.data.current.condition.icon = res.data.current.condition.icon.replace('64x64', '128x128');
        return res.data;
      },
      { enabled: !!location },
    ),
  useSearchCities: (cityName: string) =>
    useQuery<AutocompleteLocation[], Error>(
      ['location', cityName],
      async () => {
        const res = await weatherClient.get<AutocompleteLocation[]>('/search.json', {
          params: {
            q: cityName,
          },
        });
        return res.data;
      },
      { enabled: !!cityName },
    ),
};
