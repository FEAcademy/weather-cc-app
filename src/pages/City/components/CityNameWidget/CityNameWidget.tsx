import { CityName } from './CityNameWidget.styled';
import { CityNameWidgetTestIds } from './CityNameWidgetTestIds';
import { CityNameLoader } from './components/CityNameLoader';

interface Props {
  loading: boolean;
  cityName: string | undefined;
}

const CityNameWidget = ({ loading, cityName }: Props) => {
  if (loading) {
    return <CityNameLoader />;
  }

  if (cityName) {
    return <CityName data-testid={CityNameWidgetTestIds.CityName}>{cityName}</CityName>;
  }

  return <></>;
};

export { CityNameWidget };
