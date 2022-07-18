import userEvent from '@testing-library/user-event';
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

  it('should call function after selection', async () => {
    const handleSelect = jest.fn();
    render(<AutocompleteInput handleSelect={handleSelect} />);
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'Wars');

    const listEl = await screen.findByText('Warszawa');

    await userEvent.click(listEl);

    expect(handleSelect).toBeCalledWith('Warszawa');
  });
});
