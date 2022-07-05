import { WeatherSuccessResponse } from 'mocks/mockData';
import { useQuery } from 'react-query';
import { weatherClient } from '../clients';

const getWeather = async (cityName: string) => {
  const res = await weatherClient.get('/current.json', {
    params: {
      q: cityName,
      aqi: 'yes',
    },
  });
  return res.data;
};

export default {
  useCity: (cityName: string) =>
    useQuery<WeatherSuccessResponse, Error>(['weather', cityName], () => getWeather(cityName)),
};
