import { cities } from 'mocks/mockData';
import React from 'react';
import { render, screen } from 'utils';
import { AutocompleteInput } from './AutocompleteInput';
import { InputTestIds } from './AutocompleteInputTestIds';

describe('Autocomplete input', () => {
  const setState = jest.fn();
  const useStateMock: any = (initState: any) => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const fn = jest.fn();

    render(<AutocompleteInput handleSelect={fn} data={cities} setInputValue={setState} />);

    const input = screen.getByTestId(InputTestIds.Input);
    expect(input).toBeInTheDocument();
  });
});
