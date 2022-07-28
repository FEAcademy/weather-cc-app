import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  it('should render', () => {
    const fn = jest.fn();

    render(<AutocompleteInput setSavedLocation={fn} savedLocation={weatherSuccessResponse.location.name} />);

    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
  it('should load data from localstorage and fulfill input', () => {
    const fn = jest.fn();

    render(<AutocompleteInput setSavedLocation={fn} savedLocation={weatherSuccessResponse.location.name} />);

    const input = screen.getByRole('combobox');

    expect(input).toHaveValue(weatherSuccessResponse.location.name);
  });
});
