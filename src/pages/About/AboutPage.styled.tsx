import styled from 'styled-components';
import cloudImg from 'assets/images/clouds.png';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 223px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      margin-top: 147px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      margin-top: 100px;
    }
  }
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

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      font-size: 84px;
      line-height: 101px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      font-size: 55px;
      line-height: 60px;
    }
  }
`;

const SubHeading = styled.h5`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      font-size: 16px;
      line-height: 19px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

const Content = styled.div`
  margin: 330px 0;
  display: flex;
  flex-direction: column;
  grid-gap: 200px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      margin: 218px 0;
      grid-gap: 132px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      margin: 100px 0;
      grid-gap: 40px;
    }
  }
`;

const Title = styled.h3`
  font-weight: 900;
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 9px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      font-size: 25px;
      line-height: 29px;
      margin-bottom: 6px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 582px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      font-size: 14px;
      line-height: 16px;
      width: 384px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      font-size: 12px;
      line-height: 14px;
      width: 180px;
    }
  }
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

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      justify-content: space-evenly;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      flex-direction: column;
    }

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const Img = styled.img`
  width: 368px;
  height: 200px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      width: 263px;
      height: 135px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      margin-bottom: 40px;
    }
  }
`;

export { RowContainer, LogoContainer, MainHeading, Title, Description, SubHeading, Content, Img };
