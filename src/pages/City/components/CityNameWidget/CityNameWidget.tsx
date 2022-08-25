import { ButtonTypes } from 'enums/ButtonTypes';
import { FavoritesButton } from 'components/FavoritesButton';
import { CityName, CityNameWrapper } from './CityNameWidget.styled';
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
    return (
      <CityNameWrapper>
        <CityName data-testid={CityNameWidgetTestIds.CityName}>{cityName}</CityName>
        <FavoritesButton cityName={cityName} size={20} buttonType={ButtonTypes.Heart} />
      </CityNameWrapper>
    );
  }

  return <></>;
};

export { CityNameWidget };
