import { getWeatherInCity } from 'axios/queries';
import { WeatherSuccessResponse } from 'mocks/mockData';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data, isError, error, status, isLoading } = useQuery<WeatherSuccessResponse>(['weather-data', cityName], () =>
    getWeatherInCity(cityName),
  );

  console.log({ status, data: data, isLoading, isError, error });

  if (isError) {
    console.log('isError ', isError);
    return <p>Error</p>;
  }

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
