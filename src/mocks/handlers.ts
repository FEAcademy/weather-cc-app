import { rest } from 'msw';

const handlers = [
  rest.get('http://api.weatherapi.com/v1/current.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ temp: 20 }));
  }),
];

export { handlers };
