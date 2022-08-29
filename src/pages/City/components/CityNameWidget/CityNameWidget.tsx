import { Icons } from 'enums/Icons';
import { FavoritesButton } from 'components/FavoritesButton';
import { CityName, CityNameWrapper } from './CityNameWidget.styled';
import { CityNameWidgetTestIds } from './CityNameWidgetTestIds';
import { CityNameLoader } from './components/CityNameLoader';

interface Props {
  loading: boolean;
  cityName: string | undefined;
  country: string | undefined;
}

const CityNameWidget = ({ loading, cityName, country }: Props) => {
  if (loading) {
    return <CityNameLoader />;
  }

  if (cityName) {
    return (
      <CityNameWrapper>
        <CityName data-testid={CityNameWidgetTestIds.CityName}>{cityName}</CityName>
        <FavoritesButton cityName={`${cityName},${country}`} size={20} icons={Icons.Heart} />
      </CityNameWrapper>
    );
  }

  return <></>;
};

export { CityNameWidget };
