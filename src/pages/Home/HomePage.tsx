import { getWeatherByCity } from 'axios/getWeatherByCity';
import { WeatherSuccessResponse } from 'mocks/mockData';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cityName, setCityName] = useState('Wroclaw');
  const { data } = useQuery<WeatherSuccessResponse>(['current_weather_by_city', cityName], () =>
    getWeatherByCity(cityName),
  );
  console.log(data);

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
