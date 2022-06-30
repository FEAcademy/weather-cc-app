import { rest } from 'msw';

import { weatherData, errorResponseData, unauthorizedData } from './mockData';
import { WeatherData } from './mockData';

const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json';

export const handlers = [
  rest.get<WeatherData>(weatherApiUrl, (req, res, ctx) => {
    const key = req.url.searchParams.get('key');

    const isAuthorized = key === process.env.REACT_APP_WEATHER_API_KEY;

    const q = req.url.searchParams.get('q');

    const isBadRequest = q === '' || q === 'xyz';

    if (!isAuthorized) {
      return res(ctx.status(401), ctx.json(unauthorizedData));
    }

    if (isBadRequest) {
      return res(ctx.status(400), ctx.json(errorResponseData));
    }

    return res(ctx.status(200), ctx.json(weatherData));
  }),
];
