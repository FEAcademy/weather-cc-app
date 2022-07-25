import { StylesConfig } from 'react-select';
import { theme } from 'theme/theme';
import { Select } from 'models/Select';

const inputStyles: StylesConfig<Select> = {
  container: (styles) => ({
    ...styles,
    margin: '0px 24px 35px 0',
    width: '308px',
  }),
  control: (styles) => ({
    ...styles,
    height: '54px',
    border: 'none',
    boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    marginBottom: '8px',
    paddingRight: '35px',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0',
  }),
  placeholder: (styles) => ({
    ...styles,
    padding: '16px 0 16px 18px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
    color: 'rgba(112, 112, 112, 0.4)',
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: '16px 0 16px 18px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
    color: theme.colors.text,
  }),
  input: (styles) => ({
    ...styles,
    padding: '16px 0 16px 18px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
    color: theme.colors.text,
    cursor: 'text',
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: '#fff',
    color: isFocused ? theme.colors.text : 'rgba(112, 112, 112, 0.4);',
    padding: '9px 0 9px 18px',
    cursor: 'pointer',
  }),
  indicatorsContainer: () => ({ display: 'none' }),
  menu: (styles) => ({
    ...styles,
    marginTop: '8px',
    boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  }),
};

export { inputStyles };
