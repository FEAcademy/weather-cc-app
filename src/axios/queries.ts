import { WeatherSuccessResponse } from 'mocks/mockData';
import { axiosClient } from './client';

const getWeatherInCity = async (city: string): Promise<WeatherSuccessResponse> => {
  const response = await axiosClient.get<WeatherSuccessResponse>('/current.json', { params: { q: city, aqi: 'yes' } });
  return response.data;
};

export { getWeatherInCity };
