import styled from 'styled-components';
import cloudImg from 'assets/images/clouds.png';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 223px;
`;

const MainHeading = styled.h1`
  font-size: 128px;
  line-height: 154px;
  font-weight: 800;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url(${cloudImg});

  & span {
    font-weight: 300;
  }
`;

const SubHeading = styled.h5`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
`;

const Content = styled.div`
  margin: 330px 0;
  display: flex;
  flex-direction: column;
  grid-gap: 200px;
`;

const Title = styled.h3`
  font-weight: 900;
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 9px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 582px;
  color: ${({ theme }) => theme.colors.text};
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
  }
`;

export { RowContainer, LogoContainer, MainHeading, Title, Description, SubHeading, Content };
