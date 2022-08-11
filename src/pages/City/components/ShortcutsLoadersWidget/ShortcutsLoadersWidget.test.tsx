import { render, screen } from 'test-utils';
import { ShortcutLoaderWidgetTestIds } from './components/ShortcutLoaderWidget';
import { ShortcutsLoadersWidget } from './ShortcutsLoadersWidget';
import { ShortcutsLoadersWidgetTestIds } from './ShortcutsLoadersWidgetTestIds';

describe('ShortcutsLoadersWidget', () => {
  it('should render', async () => {
    render(<ShortcutsLoadersWidget />);

    const loaders = screen.getByTestId(ShortcutsLoadersWidgetTestIds.Container);

    expect(loaders).toBeInTheDocument();
  });

  it('should render 6 loaders', async () => {
    render(<ShortcutsLoadersWidget />);

    const loaders = screen.getAllByTestId(ShortcutLoaderWidgetTestIds.Loader);

    expect(loaders.length).toEqual(6);
  });
});
