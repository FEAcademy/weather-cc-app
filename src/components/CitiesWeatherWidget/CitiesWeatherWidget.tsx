import { PropsWithChildren } from 'react';
import { Container } from './CitiesWeatherWidget.styled';
import { ShortcutsWrapper, Title } from './components/Widget.styled';

interface Props {
  'data-testid': string;
}

const CitiesWeatherWidget = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <Container {...rest}>{children}</Container>;
};

CitiesWeatherWidget.Title = Title;
CitiesWeatherWidget.ShortcutsWrapper = ShortcutsWrapper;

export { CitiesWeatherWidget };
