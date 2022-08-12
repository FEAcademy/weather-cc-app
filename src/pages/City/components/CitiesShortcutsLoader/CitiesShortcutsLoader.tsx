import { ShortcutsContainer } from './CitiesShortcutsLoader.styled';
import { CitiesShortcutsLoaderTestIds } from './CitiesShortcutsLoaderTestIds';
import { ShortcutLoaderWidget } from './components/ShortcutLoaderWidget';

const CitiesShortcutsLoader = () => {
  return (
    <ShortcutsContainer data-testid={CitiesShortcutsLoaderTestIds.Container}>
      {[...Array(6)].map((_, id) => {
        return <ShortcutLoaderWidget key={id} />;
      })}
    </ShortcutsContainer>
  );
};

export { CitiesShortcutsLoader };
