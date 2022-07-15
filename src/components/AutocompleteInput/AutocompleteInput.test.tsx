import { render, screen } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  it('should render', () => {
    const fn = jest.fn();
    render(<AutocompleteInput handleSelect={fn} />);
    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
});
