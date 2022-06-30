import axios from 'axios';
import { IWeatherData } from './IWeatherData';

const apiClient = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    aqi: 'yes',
  },
});

const getWeatherInCity = async (city: string): Promise<IWeatherData> => {
  const response = await apiClient.get<IWeatherData>('/current.json', { params: { q: city } });
  console.log({ response });
  return response.data;
};

export { getWeatherInCity };
