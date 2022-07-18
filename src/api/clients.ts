import axios from 'axios';

const weatherClient = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export { weatherClient };
