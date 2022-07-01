import { axiosClient } from './client';

const getWeather = async (city: string) => {
  const res = await axiosClient.get('/current.json', {
    params: {
      q: city,
      aqi: 'yes',
    },
  });
  return res.data;
};

export { getWeather };
