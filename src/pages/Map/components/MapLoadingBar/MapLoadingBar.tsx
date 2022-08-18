import { Container, Text } from './MapLoadingBar.styled';
import { MapLoadingBarTestIds } from './MapLoadingBarTestIds';

const MapLoadingBar = () => {
  return (
    <Container data-testid={MapLoadingBarTestIds.Loader}>
      <Text>We search for places on the map...</Text>
    </Container>
  );
};

export { MapLoadingBar };
