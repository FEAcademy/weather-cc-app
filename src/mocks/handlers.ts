import { rest } from 'msw';
import { currentGetResponse, unauthorizedData, errorResponseData } from './mockData';

const apiUrl = 'http://api.weatherapi.com/v1/current.json';

export const handlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    const key = req.url.searchParams.get('key');
    const isAuhtenticated = key === process.env.REACT_APP_WEATER_API_KEY;

    const q = req.url.searchParams.get('q');
    const isBadRequest = q === '' || q === 'xyz';

    if (!isAuhtenticated) {
      return res(ctx.status(401), ctx.json(unauthorizedData));
    }

    if (isBadRequest) {
      return res(ctx.status(400), ctx.json(errorResponseData));
    }

    return res(ctx.status(200), ctx.json(currentGetResponse));
  }),
];
