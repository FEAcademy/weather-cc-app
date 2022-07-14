import { render, screen } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  it('should render', () => {
    render(<AutocompleteInput />);
    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
});
