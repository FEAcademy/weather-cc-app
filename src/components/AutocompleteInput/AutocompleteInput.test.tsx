//import userEvent from '@testing-library/user-event';
import { cities } from 'mocks/mockData';
import React from 'react';
import { render, screen } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Autocomplete input', () => {
  const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useStateMock: any = (initState: any) => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState');

  // beforeEach(() => {
  //   (useStateSpy as jest.Mock).mockImplementation((init) => [init, setState]);
  //   //(useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('should render', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const fn = jest.fn();

    render(<AutocompleteInput handleSelect={fn} data={cities} setInputValue={setState} />);

    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });

  // it('should call function after selection', async () => {
  //   jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  //   const handleSelect = jest.fn();

  //   render(<AutocompleteInput handleSelect={handleSelect} data={cities} setInputValue={setState} />);
  //   const input = screen.getByRole('combobox');

  //   userEvent.type(input, 'Wars');

  //   const listEl = await screen.findByText('Warszawa');

  //   userEvent.click(listEl);

  //   expect(handleSelect).toBeCalledWith('Warszawa');
  // });
});
