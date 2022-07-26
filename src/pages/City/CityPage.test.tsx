import { screen, render } from 'utils';
import { CityPagePage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';

describe('City page', () => {
  it('should render', () => {
    render(<CityPagePage />);

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });
});
