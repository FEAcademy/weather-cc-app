import { render, screen } from 'test-utils';
import { ShortcutLoaderWidget } from './ShortcutLoaderWidget';
import { ShortcutLoaderWidgetTestIds } from './ShortcutLoaderWidgetTestIds';

describe('ShortcutLoaderWidget', () => {
  it('should render', () => {
    render(<ShortcutLoaderWidget />);

    const container = screen.getByTestId(ShortcutLoaderWidgetTestIds.Loader);
    expect(container).toBeInTheDocument();
  });
});
