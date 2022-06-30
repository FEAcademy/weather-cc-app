const currentResponse = {
  last_updated_epoch: 1656506700,
  last_updated: '2022-06-29 14:45',
  temp_c: 28.1,
  temp_f: 82.6,
  is_day: 1,
  condition: { text: 'Cloudy', icon: '//cdn.weatherapi.com/weather/64x64/day/119.png', code: 1006 },
  wind_mph: 9.2,
  wind_kph: 14.8,
  wind_degree: 78,
  wind_dir: 'ENE',
  pressure_mb: 1016,
  pressure_in: 29.99,
  precip_mm: 0,
  precip_in: 0,
  humidity: 49,
  cloud: 87,
  feelslike_c: 28.8,
  feelslike_f: 83.8,
  vis_km: 10,
  vis_miles: 6,
  uv: 6,
  gust_mph: 10.5,
  gust_kph: 16.9,
  air_quality: {
    co: 198.600002,
    no2: 2.5,
    o3: 90.80000305175781,
    so2: 2.200000047683716,
    pm2_5: 4.199999809265137,
    pm10: 4.5,
    'us-epa-index': 1,
    'gb-defra-index': 1,
  },
};

type CurrentResponse = Partial<typeof currentResponse>;

export { currentResponse };
export type { CurrentResponse };
