import axios from 'axios';

export const custom = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export type Weather = {
  current: {
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  location: {
    name: string;
  };
};

export async function getWeatherByCity(city: string): Promise<Weather | null> {
  try {
    const { data } = await custom.get<Weather>('current.json', {
      params: { q: city },
    });
    return data;
  } catch (e) {
    return null;
  }
}

