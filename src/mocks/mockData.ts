import { Weather } from 'models/Weather';

const weatherSuccessResponse: Weather = {
  current: {
    condition: { text: 'Sunny', icon: '//cdn.weatherapi.com/weather/128x128/day/113.png', code: 1000 },
    cloud: 0,
    feelslike_c: 25.5,
    feelslike_f: 79,
    gust_kph: 5.4,
    gust_mph: 3.4,
    humidity: 69,
    is_day: 1,
    last_updated: '2022-07-01 08:00',
    last_updated_epoch: 1656655200,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 29.85,
    pressure_mb: 1011,
    temp_c: 25.1,
    temp_f: 77,
    uv: 7,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 160,
    wind_dir: 'SSE',
    wind_kph: 6.8,
    wind_mph: 4.3,
    air_quality: {
      co: 155.1999969482422,
      no2: 3.799999952316284,
      o3: 118.69999694824219,
      so2: 2.099999904632568,
      pm2_5: 6.599999904632568,
      pm10: 12.800000095367432,
      'us-epa-index': 1,
      'gb-defra-index': 1,
    },
  },
  location: {
    country: 'Poland',
    lat: 51.1,
    localtime: '2022-07-01 9:13',
    localtime_epoch: 1656659612,
    lon: 17.03,
    name: 'Wroclaw',
    region: '',
    tz_id: 'Europe/Warsaw',
  },
};

const cities: { [name: string]: string }[] = [{ name: 'Wroclaw' }, { name: 'Warszawa' }, { name: 'Walbrzych' }];
// const cities: string[] = ['Wroclaw', 'Warszawa', 'Walbrzych'];

export { weatherSuccessResponse, cities };
