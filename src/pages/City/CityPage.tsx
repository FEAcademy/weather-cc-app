import Weather from 'api/services/Weather';
import { useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { CityName } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';

const CityPagePage = () => {
  const { city } = useParams();
  const { data } = Weather.useCity(city!);

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {data && <CityName>{data.location.name}</CityName>}
    </PageContentContainer>
  );
};

export { CityPagePage };
