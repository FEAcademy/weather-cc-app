import { weatherSuccessResponse } from 'mocks/mockData';
import { fireEvent, render, screen, waitFor } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  it('should render', () => {
    const fn = jest.fn();

    render(<AutocompleteInput handleSelect={fn} savedLocation={weatherSuccessResponse.location.name} />);

    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
  it('should load data from localstorage and fulfill input', () => {
    const fn = jest.fn();

    render(<AutocompleteInput handleSelect={fn} savedLocation={weatherSuccessResponse.location.name} />);

    const input = screen.getByRole('combobox');

    expect(input).toHaveValue(weatherSuccessResponse.location.name);
  });

  it('should display loading state and then remove it', async () => {
    const fn = jest.fn();
    render(<AutocompleteInput handleSelect={fn} savedLocation={weatherSuccessResponse.location.name} />);

    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();

    fireEvent.input(input, {
      target: {
        value: 'Walb',
      },
    });

    expect(input).toHaveValue('Walb');

    const loadingState = await screen.findByText('Loading...');
    expect(loadingState).toBeInTheDocument();

    await waitFor(() => {
      expect(loadingState).not.toBeInTheDocument();
    });
  });
});
