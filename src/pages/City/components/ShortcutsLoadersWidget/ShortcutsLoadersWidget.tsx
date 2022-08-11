import { ShortcutLoaderWidget } from './components/ShortcutLoaderWidget';
import { ShortcutsContainer } from './ShortcutsLoadersWidget.styled';
import { ShortcutsLoadersWidgetTestIds } from './ShortcutsLoadersWidgetTestIds';

const ShortcutsLoadersWidget = () => {
  return (
    <ShortcutsContainer data-testid={ShortcutsLoadersWidgetTestIds.Container}>
      {[...Array(6)].map((_, id) => {
        return <ShortcutLoaderWidget key={id} />;
      })}
    </ShortcutsContainer>
  );
};

export { ShortcutsLoadersWidget };
