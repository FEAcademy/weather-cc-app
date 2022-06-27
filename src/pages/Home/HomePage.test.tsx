import { screen } from '@testing-library/react';
import { DataTestIDS } from 'utils/data-test-ids';
import { render } from 'utils/test-utils';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render title', () => {
    render(<HomePage />);

    expect(screen.getByTestId(DataTestIDS.HomeTitle)).toHaveTextContent('Home page');
  });
});
