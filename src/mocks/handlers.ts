import { rest } from 'msw';
import { weatherSuccessResponse, cities } from './mockData';

const apiUrl = process.env.REACT_APP_WEATHER_API_URL;

const currentWeatherApiUrl = `${apiUrl}/current.json`;
const searchCitiesApiUrl = `${apiUrl}/search.json`;

const delay = 100;

const handlers = [
  rest.get(currentWeatherApiUrl, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');

    const isEmptyQuery = q === '';
    const isNotMatchingQuery = q === 'xyz';

    if (isEmptyQuery) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1003,
          message: 'Parameter "q" not provided.',
        }),
        ctx.delay(delay),
      );
    }
    if (isNotMatchingQuery) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1006,
          message: 'No location found matching parameter "q".',
        }),
        ctx.delay(delay),
      );
    }
    return res(ctx.status(200), ctx.json(weatherSuccessResponse), ctx.delay(delay));
  }),
  rest.get(searchCitiesApiUrl, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');

    const isEmptyQuery = q === '';

    if (isEmptyQuery) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1003,
          message: 'Parameter q is missing.',
        }),
        ctx.delay(delay),
      );
    }
    return res(ctx.status(200), ctx.json(cities), ctx.delay(delay));
  }),
];

export { handlers };
