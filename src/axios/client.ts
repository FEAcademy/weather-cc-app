import { default as axiosBase } from 'axios';

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lang: 'pl',
  },
});

export { axios };
