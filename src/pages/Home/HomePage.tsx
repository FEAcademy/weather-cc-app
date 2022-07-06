import Weather from 'api/services/Weather';
import { useState } from 'react';
import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  data && console.log(data);

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
