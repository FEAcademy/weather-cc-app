import axios from 'axios';
import { IWeatherData } from './IWeatherData';

const apiClient = axios.create({
  baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&aqi=yes&q=`,
  headers: {
    'Content-type': 'application/json',
  },
});

const getWeatherInCity = async (city: string): Promise<IWeatherData> => {
  const response = await apiClient.get<IWeatherData>(city);
  return response.data;
};

export { getWeatherInCity };
