import { useState } from 'react';

import { Box } from 'components/Box';
import { Title } from 'components/Title';
import WeatherAPI from '../../api/services/Weather';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data, isError, error, status, isLoading } = WeatherAPI.useCity(cityName);

  console.log({ status, data: data, isLoading, isError, error });

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
