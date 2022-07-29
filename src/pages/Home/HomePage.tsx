import Weather from 'api/services/Weather';
import { useCallback } from 'react';
import { AutocompleteInput } from 'components/AutocompleteInput';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { Select } from 'models/Select';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [savedLocation, setLocation] = useLocalStorage('current_location');
  const { data, isLoading } = Weather.useCity(savedLocation || '');

  const handleSelect = useCallback(
    (city: Select | null) => {
      city && setLocation(city.value);
    },
    [setLocation],
  );

  return (
    <PageContentContainer data-testid={HomePageTestIds.HomePage}>
      <AutocompleteInput handleSelect={handleSelect} savedLocation={savedLocation || ''} />
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={HomePageTestIds.Widgets} />
    </PageContentContainer>
  );
};

export { HomePage };
