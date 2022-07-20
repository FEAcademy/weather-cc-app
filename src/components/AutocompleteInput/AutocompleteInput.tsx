import debounce from 'debounce-promise';
import React from 'react';
import AsyncSelect from 'react-select/async';

import { Select } from 'models/Select';
import { inputStyles } from './AutocompleteInput.styled';
import { InputTestIds } from './AutocompleteInputTestIds';

interface Props {
  handleSelect: (newValue: Select | null) => void;
  data: string[] | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const AutocompleteInput = ({ handleSelect, data, setInputValue }: Props) => {
  const loadOptions = (inputValue: string) => {
    setInputValue(inputValue);

    let optionsData: Select[] = [] as Select[];

    if (data) {
      optionsData = data.map((cityName) => ({
        value: cityName,
        label: cityName,
      }));
    }

    return Promise.resolve(optionsData);
  };

  const onChange = (newValue: Select | null) => {
    handleSelect(newValue);
  };

  const debounceLoadOptions = debounce(async (inputValue: string) => {
    return loadOptions(inputValue);
  }, 200);

  return (
    <div data-testid={InputTestIds.Input}>
      <AsyncSelect
        loadOptions={debounceLoadOptions}
        styles={inputStyles}
        placeholder={'Search'}
        onChange={onChange}
        isMulti={false}
        name="cities"
        inputId="cities"
      />
    </div>
  );
};

export { AutocompleteInput };
