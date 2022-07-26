import Weather from 'api/services/Weather';
import { useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { CityName } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';

const CityPagePage = () => {
  const { city } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = Weather.useCity(city!);

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {city && <CityName>{city}</CityName>}
    </PageContentContainer>
  );
};

export { CityPagePage };
