import { default as axiosBase } from 'axios';

const axios = axiosBase.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    aqi: 'yes',
  },
});

export { axios };
