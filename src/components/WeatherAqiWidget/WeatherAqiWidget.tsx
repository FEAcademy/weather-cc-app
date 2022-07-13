import { Container } from './WeatherAqiWidget.styled';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
}

interface DefraTheme {
  backgroundColors: string[];
  textColor: string;
}

const getColorsByDefraIndex = (defraIndex: number): DefraTheme => {
  const defaultColors = { backgroundColors: ['#A9E0A8', '#A2D2A1'], textColor: 'inherit' };
  const lowDefraColors = defaultColors;
  const moderateDefraColors = { backgroundColors: ['#F4C173', '#E6B56D'], textColor: 'inherit' };
  const highDefraColors = { backgroundColors: ['#F47B73', '#E1726B'], textColor: '#ECEBEB' };
  const veryHighDefraColors = { backgroundColors: ['#B04C94', '#943F7C'], textColor: '#ECEBEB' };

  if (!defraIndex) return defaultColors;
  if (defraIndex <= 3) return lowDefraColors;
  if (defraIndex > 3 && defraIndex <= 6) return moderateDefraColors;
  if (defraIndex > 6 && defraIndex <= 9) return highDefraColors;
  if (defraIndex >= 10) return veryHighDefraColors;

  return defaultColors;
};

const WeatherAqiWidget = ({ defraIndex = 1 }: Props) => {
  return (
    <Container
      defraColors={getColorsByDefraIndex(defraIndex)}
      data-testid={WeatherAqiWidgetTestIds.Container}
    ></Container>
  );
};

export { WeatherAqiWidget };
