import { useState } from 'react';
import { useQuery } from 'react-query';

import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { getWeather } from '../../axios/queries';
import { WeatherSuccessResponse } from '../../mocks/mockData';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cityName, setCityName] = useState('Wroclaw');
  const { isLoading, isError, error, data } = useQuery<WeatherSuccessResponse, Error>(['weather', cityName], () =>
    getWeather(cityName),
  );

  isLoading && console.log(isLoading);
  isError && console.log(error);
  data && console.log(data);

  return (
    <>
      {isLoading && <div>loading...</div>}
      {isError && <div>error</div>}
      {data && <div>{data.location?.country}</div>}
      <Title data-testid={HomePageTestIds.Title}>Home page</Title>
      <Box>Box content</Box>
    </>
  );
};

export { HomePage };
