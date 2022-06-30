import axios from 'axios';

export const custom = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});


