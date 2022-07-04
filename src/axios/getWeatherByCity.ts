import { axiosClient } from './client';
import { Weather } from './Weather';

const getWeatherByCity = async (city: string): Promise<Weather> => {
  const { data } = await axiosClient.get<Weather>('/current.json', {
    params: { q: city, agi: 'yes' },
  });
  return data;
};

export { getWeatherByCity };
