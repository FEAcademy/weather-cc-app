import { render, screen } from 'utils';
import { CityPage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';

describe('City page', () => {
  it('should render', () => {
    render(<CityPage />);

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });
});
