import { render, screen } from 'utils';
import { SingleLocationPage } from './SingleLocationPage';
import { SingleLocationTestIds } from './SingleLocationPageTestIds';

describe('Single location page', () => {
  it('should render', () => {
    render(<SingleLocationPage />);

    expect(screen.getByTestId(SingleLocationTestIds.Container)).toBeInTheDocument();
  });
});
