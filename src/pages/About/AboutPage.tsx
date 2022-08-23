import mapImg from 'assets/images/map.png';
import parametersWidgetImg from 'assets/images/parametersWidget.png';
import temperatureWidgetImg from 'assets/images/temperatureWidget.png';
import { MainHeading, LogoContainer, SubHeading, RowContainer, Title, Description, Content } from './AboutPage.styled';
import { AboutPageTestIds } from './AboutPageTestIds';

const aboutPageData = [
  {
    title: 'WEATHER IN YOUR LOCATION',
    description:
      "With the Weatherly app, you'll get access to weather data at your current location or anywhere else in the world.",
    img: temperatureWidgetImg,
  },
  {
    title: 'AIR QUALITY',
    description:
      'You will find out what is the quality of air you breathe or will breathe when choosing the place of your future stay.',
    img: parametersWidgetImg,
  },
  {
    title: 'WEATHER ON MAP',
    description: 'You can compare the weather in different places on our weather map at any time.',
    img: mapImg,
  },
];

const AboutPage = () => (
  <div data-testid={AboutPageTestIds.Container}>
    <LogoContainer>
      <MainHeading>
        WEATHER<span>LY</span>
      </MainHeading>
      <SubHeading>weather app from CC frontend academy attendees</SubHeading>
    </LogoContainer>
    <Content>
      {aboutPageData.map(({ title, description, img }) => (
        <RowContainer key={title}>
          <img src={img} alt={title} />
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
        </RowContainer>
      ))}
    </Content>
  </div>
);

export { AboutPage };
