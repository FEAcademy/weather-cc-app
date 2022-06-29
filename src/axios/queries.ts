import { axios } from './client';

const getWeather = async (q: string): Promise<unknown> => {
  return await axios.get('/current.json', {
    params: {
      q,
    },
  });
};

export { getWeather };
