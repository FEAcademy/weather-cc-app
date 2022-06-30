import { rest } from 'msw';
import { IWeatherData } from 'utils/IWeatherData';

const responseData: IWeatherData = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1656496305,
    localtime: '2022-06-29 10:51',
  },
  current: {
    last_updated_epoch: 1656495900,
    last_updated: '2022-06-29 10:45',
    temp_c: 16.0,
    temp_f: 60.8,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      code: 1003,
    },
    wind_mph: 5.6,
    wind_kph: 9.0,
    wind_degree: 190,
    wind_dir: 'S',
    pressure_mb: 1012.0,
    pressure_in: 29.88,
    precip_mm: 0.3,
    precip_in: 0.01,
    humidity: 88,
    cloud: 75,
    feelslike_c: 16.0,
    feelslike_f: 60.8,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 4.0,
    gust_mph: 11.2,
    gust_kph: 18.0,
    air_quality: {
      co: 171.89999389648438,
      no2: 17.700000762939453,
      o3: 46.5,
      so2: 9.199999809265137,
      pm2_5: 3.4000000953674316,
      pm10: 3.9000000953674316,
      'us-epa-index': 1,
      'gb-defra-index': 1,
    },
  },
};

const errorResponse = {
  error: {
    code: 1006,
    message: 'No matching location found.',
  },
};

export const handlers = [
  rest.get<IWeatherData>(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&aqi=yes&q=London`,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(responseData));
    },
  ),

  rest.get<IWeatherData>(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&aqi=yes&q=xyz`,
    (_, res, ctx) => {
      return res(ctx.status(400), ctx.json(errorResponse));
    },
  ),
];
