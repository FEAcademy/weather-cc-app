import { getWeatherByCity } from 'axios/getWeatherByCity';
import { useQuery } from 'react-query';
import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const { data } = useQuery('current_weather_by_city', () => getWeatherByCity('Wroclaw'));
  console.log(data);

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
