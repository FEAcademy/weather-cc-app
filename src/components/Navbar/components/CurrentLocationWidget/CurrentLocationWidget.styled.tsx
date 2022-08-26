import styled from 'styled-components';

const Container = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.main};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WeatherIcon = styled.img`
  width: 40px;
  height: 39.26px;
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      width: 30px;
      height: 30px;
      margin-right: 0;
    }
  }
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 24px;
  line-height: 29px;

  @media screen and (max-width: ${({ theme }) => theme.widths.mobile}) {
    & {
      font-size: 15px;
      line-height: 20px;
    }

    & > span {
      display: block;
      text-align: center;
    }
  }
`;

const DegreeSign = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

export { Container, WeatherIcon, Wrapper, Description, DegreeSign };
