import axios from 'axios';

const weatherClient = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

const overpassClient = axios.create({
  baseURL: process.env.REACT_APP_OVERPASS_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
});

export { weatherClient, overpassClient };
