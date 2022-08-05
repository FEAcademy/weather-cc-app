import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  it('should render', () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
  it('should load data from localstorage and fulfill input', () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const inputValue = screen.getByText(weatherSuccessResponse.location.name);
    expect(inputValue).toBeInTheDocument();
  });
});
