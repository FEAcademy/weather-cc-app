import { render, screen } from 'test-utils';
import { ShortcutWidgetLoader } from './ShortcutWidgetLoader';
import { ShortcutWidgetLoaderTestIds } from './ShortcutWidgetLoaderTestIds';

describe('ShortcutWidgetLoader', () => {
  it('should render', async () => {
    render(<ShortcutWidgetLoader />);

    const shortcutWidget = screen.getByTestId(ShortcutWidgetLoaderTestIds.Loader);

    expect(shortcutWidget).toBeInTheDocument();
  });
});
