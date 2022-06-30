const currentGetResponse = {
  location: {
    name: 'Paris',
    region: 'Ile-de-France',
    country: 'France',
    lat: 48.87,
    lon: 2.33,
    tz_id: 'Europe/Paris',
    localtime_epoch: 1656601159,
    localtime: '2022-06-30 16:59',
  },
  current: {
    last_updated_epoch: 1656600300,
    last_updated: '2022-06-30 16:45',
    temp_c: 17.0,
    temp_f: 62.6,
    is_day: 1,
    condition: { text: 'Moderate rain', icon: '//cdn.weatherapi.com/weather/64x64/day/302.png', code: 1189 },
    wind_mph: 8.1,
    wind_kph: 13.0,
    wind_degree: 160,
    wind_dir: 'SSE',
    pressure_mb: 1015.0,
    pressure_in: 29.97,
    precip_mm: 0.3,
    precip_in: 0.01,
    humidity: 77,
    cloud: 75,
    feelslike_c: 17.0,
    feelslike_f: 62.6,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 3.0,
    gust_mph: 10.3,
    gust_kph: 16.6,
  },
};

const errorResponseData = {
  error: {
    code: 1006,
    message: 'No matching location found.',
  },
};

const unauthorizedData = {
  error: {
    code: 2006,
    message: 'API key is invalid.',
  },
};

type CurrentGetResponse = Partial<typeof currentGetResponse>;

export { currentGetResponse, unauthorizedData, errorResponseData };
export type { CurrentGetResponse };
