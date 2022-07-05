import axios from 'axios';

const weatherApiClient = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lang: 'pl',
  },
});

export { weatherApiClient };
