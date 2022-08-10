import userEvent from '@testing-library/user-event';
import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen, waitFor } from 'test-utils';
import { AutocompleteInput } from './AutocompleteInput';
import { AutocompleteInputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  it('should render', () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const input = screen.getByTestId(AutocompleteInputTestIds.Input);
    expect(input).toBeInTheDocument();
  });

  it('should load data from localstorage and fulfill input', () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const inputValue = screen.getByText(weatherSuccessResponse.location.name);
    expect(inputValue).toBeInTheDocument();
  });

  it('should display loading state and then remove it', async () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(input, 'Walb');

    expect(input).toHaveValue('Walb');

    const loadingState = await screen.findByText('Loading...');

    expect(loadingState).toBeInTheDocument();

    await waitFor(() => {
      expect(loadingState).not.toBeInTheDocument();
    });
  });

  it('should display autocomplete input options', async () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const input = screen.getByRole('combobox');

    const user = userEvent.setup();
    await user.type(input, 'Brze');

    const firstOption = await screen.findByText('Brzeg');
    const secondOption = await screen.findByText('Nowa Brzezina');

    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();
  });

  it('should display the selected option', async () => {
    const fn = jest.fn();

    render(<AutocompleteInput onChange={fn} value={weatherSuccessResponse.location.name} />);

    const input = screen.getByRole('combobox');

    const user = userEvent.setup();
    await user.type(input, 'Brze');

    const firstOption = await screen.findByText('Brzeg');
    const secondOption = await screen.findByText('Nowa Brzezina');

    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();

    user.click(firstOption);

    expect(firstOption).toBeInTheDocument();
    await waitFor(() => {
      expect(secondOption).not.toBeInTheDocument();
    });
  });
});
