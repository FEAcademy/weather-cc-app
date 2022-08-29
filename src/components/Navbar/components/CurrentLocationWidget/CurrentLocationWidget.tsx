import { CurrentLocationWidgetDesktop } from './components/CurrentLocationWidgetDesktop';
import { CurrentLocationWidgetMobile } from './components/CurrentLocationWidgetMobile';
import { Container, WeatherIcon, Description, DegreeSign } from './CurrentLocationWidget.styled';

const CurrentLocationWidget = () => {
  let isLoading = true;
  const data: any = {}; // temporary solution in order not to use

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <CurrentLocationWidgetDesktop />
          <CurrentLocationWidgetMobile />
        </>
      );
    }

    if (data) {
      const { current } = data;
      const roundedTemperature = Math.round(current.temp_c);
      const icon = current.condition.icon;
      const locationName = data.location.name;

      return (
        <>
          <WeatherIcon src={icon} alt="weather contition icon" />
          <Description>
            <span>
              {roundedTemperature} <DegreeSign>&deg;C</DegreeSign>
            </span>
            <span>&nbsp; in {locationName}</span>
          </Description>
        </>
      );
    }

    return <></>;
  };

  return <Container>{renderContent()}</Container>;
};

export { CurrentLocationWidget };
