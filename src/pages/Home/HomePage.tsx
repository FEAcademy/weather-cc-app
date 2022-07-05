import Weather from 'api/services/Weather';
import { useState } from 'react';
import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cityName, setCityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);
  console.log(data);

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
