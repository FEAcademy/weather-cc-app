import { render, screen } from 'test-utils';
import { CitiesShortcutsLoader } from './CitiesShortcutsLoader';
import { CitiesShortcutsLoaderTestIds } from './CitiesShortcutsLoaderTestIds';
import { ShortcutLoaderWidgetTestIds } from './components/ShortcutLoaderWidget';

describe('ShortcutsLoadersWidget', () => {
  it('should render', async () => {
    render(<CitiesShortcutsLoader />);

    const loaders = screen.getByTestId(CitiesShortcutsLoaderTestIds.Container);

    expect(loaders).toBeInTheDocument();
  });

  it('should render 6 loaders', async () => {
    render(<CitiesShortcutsLoader />);

    const loaders = screen.getAllByTestId(ShortcutLoaderWidgetTestIds.Loader);

    expect(loaders.length).toEqual(6);
  });
});
