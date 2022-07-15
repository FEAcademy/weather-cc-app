import { PropsWithChildren } from 'react';
import { DataItem } from './components/DataItem';
import { Container } from './WeatherWidget.styled';

interface Props {
  defraIndex?: number;
  'data-testid': string;
}

const WeatherWidget = ({ defraIndex, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <Container defraIndex={defraIndex} {...rest}>
      {children}
    </Container>
  );
};

WeatherWidget.DataItem = DataItem;

export { WeatherWidget };
