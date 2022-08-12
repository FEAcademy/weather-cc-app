import { render, screen } from 'test-utils';
import { ShortcutLoaderWidgetTestIds } from './components/ShortcutLoaderWidget';
import { LoadersWidget } from './LoadersWidget';
import { LoadersWidgetTestIds } from './LoadersWidgetTestIds';

describe('ShortcutsLoadersWidget', () => {
  it('should render', async () => {
    render(<LoadersWidget />);

    const loaders = screen.getByTestId(LoadersWidgetTestIds.Container);

    expect(loaders).toBeInTheDocument();
  });

  it('should render 6 loaders', async () => {
    render(<LoadersWidget />);

    const loaders = screen.getAllByTestId(ShortcutLoaderWidgetTestIds.Loader);

    expect(loaders.length).toEqual(6);
  });
});
