import ContentLoader from 'react-content-loader';
import { Weather } from 'models/Weather';
import { Container, WeatherIcon, Wrapper, Description, DegreeSign } from './CurrentLocationWidget.styled';

const CurrentLocationWidget = () => {
  let isLoading = false;
  const data: Weather | any = {}; // temporary solution in order not to use

  const renderContent = () => {
    if (isLoading) {
      if (screen.width > 600) {
        return (
          <ContentLoader
            speed={2}
            width={219}
            height={40}
            viewBox="0 0 219 40"
            backgroundColor="#e1e1e1"
            foregroundColor="#ececec"
          >
            <circle cx="20" cy="20" r="20" />
            <rect x="50" y="3" rx="8" ry="8" width="169" height="34" />
          </ContentLoader>
        );
      } else {
        return (
          <ContentLoader
            speed={2}
            width={120}
            height={40}
            viewBox="0 0 120 30"
            backgroundColor="#e1e1e1"
            foregroundColor="#ececec"
          >
            <circle cx="30" cy="15" r="15" />
            <rect x="50" y="0" rx="8" ry="8" width="70" height="30" />
          </ContentLoader>
        );
      }
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

  return (
    <Container>
      <Wrapper>{renderContent()}</Wrapper>
    </Container>
  );
};

export { CurrentLocationWidget };
