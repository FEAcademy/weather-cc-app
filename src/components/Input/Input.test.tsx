import { render, screen } from 'utils';
import { Input } from './Input';
import { InputTestIds } from './InputTestIds';

describe('Input', () => {
  it('should render', () => {
    render(<Input />);
    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
});
