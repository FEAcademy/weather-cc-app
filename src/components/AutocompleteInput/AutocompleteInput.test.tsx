//import userEvent from '@testing-library/user-event';
import { cities } from 'mocks/mockData';
import { useState as useStateMock } from 'react';
import { render, screen } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Autocomplete input', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });

  it('should render', () => {
    const fn = jest.fn();

    render(<AutocompleteInput handleSelect={fn} data={cities} setInputValue={setState} />);

    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });

  // it('should render autocomplete input cities correctly', async () => {
  //   const fn = jest.fn();
  //   render(<AutocompleteInput handleSelect={fn} data={cities} setInputValue={setState} />);

  //   const input = screen.getByRole('combobox');

  //   userEvent.type(input, 'W');

  //   const listEl = await screen.findByText(/Warszawa/i);

  //   userEvent.click(listEl);

  //   const a = await screen.findByText(/Warszawa/i);

  //   expect(/Warszawa/i).toBeInTheDocument();
  //   expect(fn).toBeCalledWith('Warszawa');
  // });
});
