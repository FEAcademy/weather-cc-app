import mapImg from 'assets/images/map.png';
import parametersWidgetImg from 'assets/images/parametersWidget.png';
import temperatureWidgetImg from 'assets/images/temperatureWidget.png';
import { MainHeading, LogoContainer, SubHeading, RowContainer, Title, Description, Content } from './AboutPage.styled';
import { AboutPageTestIds } from './AboutPageTestIds';

const aboutPageData = [
  {
    title: 'WEATHER IN YOUR LOCATION',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
    img: temperatureWidgetImg,
  },
  {
    title: 'AIR QUALITY',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
    img: parametersWidgetImg,
  },
  {
    title: 'WEATHER ON MAP',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
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
