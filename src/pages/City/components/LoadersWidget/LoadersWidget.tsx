import { ShortcutLoaderWidget } from './components/ShortcutLoaderWidget';
import { ShortcutsContainer } from './LoadersWidget.styled';
import { LoadersWidgetTestIds } from './LoadersWidgetTestIds';

const LoadersWidget = () => {
  return (
    <ShortcutsContainer data-testid={LoadersWidgetTestIds.Container}>
      {[...Array(6)].map((_, id) => {
        return <ShortcutLoaderWidget key={id} />;
      })}
    </ShortcutsContainer>
  );
};

export { LoadersWidget };
