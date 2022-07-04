import { WeatherSuccessResponse } from 'mocks/mockData';
import { axiosClient } from './client';

const getWeatherByCity = async (city: string): Promise<WeatherSuccessResponse> => {
  const { data } = await axiosClient.get<WeatherSuccessResponse>('/current.json', {
    params: { q: city, aqi: 'yes' },
  });
  return data;
};

export { getWeatherByCity };
