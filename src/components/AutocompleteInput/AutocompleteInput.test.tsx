import { weatherSuccessResponse } from 'mocks/mockData';
import {  fireEvent, render, screen, waitFor } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

jest.mock('api/services/Weather', () => ({
  ...jest.requireActual('api/services/Weather'),
  useSearchCities: () => ({
    data: ['Walbrzych', 'Wroclaw','Warszawa'],
  }),
}));

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
  it('should display autocomplete input options', async () => {
    const fn = jest.fn();
    
    render(
      <AutocompleteInput handleSelect={fn} savedLocation={weatherSuccessResponse.location.name} />
    );
    
    const input = screen.getByRole('combobox');
  
    expect(input).toBeInTheDocument();
   
    fireEvent.input(input, {
      target: {
        value: 'Walbrz',
      },
    });
  
    expect(await screen.findByText('Walbrzych')).toBeInTheDocument();
  });
  it('should display the selected option', async () => {
    const fn = jest.fn();
    
    render(
      <AutocompleteInput handleSelect={fn} savedLocation={weatherSuccessResponse.location.name} />
    );
    
    const input = screen.getByRole('combobox');
   
    fireEvent.input(input, {
      target: {
        value: 'Walbrz',
      },
    });

    fireEvent.click(await screen.findByText('Walbrzych'));
    
    expect(screen.getByText('Walbrzych')).toBeInTheDocument();
  });
});
