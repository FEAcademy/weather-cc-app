import { getWeatherInCity } from 'axios/queries';
import { WeatherSuccessResponse } from 'mocks/mockData';
import { useQuery } from 'react-query';
import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const { data, isError, error, status, isLoading } = useQuery<WeatherSuccessResponse>('weather-data', async () => {
    return await getWeatherInCity('Wroclaw');
  });

  console.log({ status, data: data, isLoading, isError, error });

  if (isError) {
    console.log('isError ', isError);
    return <p>Errorek</p>;
  }

  return (
    <>
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
