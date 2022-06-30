import { rest } from 'msw';

const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json';

const handlers = [
  rest.get(weatherApiUrl, (req, res, ctx) => {
    const key = req.url.searchParams.get('key');
    const isAuhtenticated = key === process.env.REACT_APP_WEATER_API_KEY;

    const q = req.url.searchParams.get('q');
    const isBadRequest = q === '';

    const isResultFound = q === 'xyz';

    if (!isAuhtenticated)
      return res(
        ctx.status(403),
        ctx.json({
          message: 'Not Authenticated',
        }),
      );
    if (isBadRequest) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Bad request',
        }),
      );
    }
    if (isResultFound) {
      return res(
        ctx.status(404),
        ctx.json({
          message: 'Not Found',
        }),
      );
    }
    return res(ctx.status(200), ctx.json({ temp: 20 }));
  }),
];

export { handlers };
