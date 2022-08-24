import styled from 'styled-components';

const CityNameWrapper = styled.div`
  margin-bottom: 42px;
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 42px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      margin-top: 42px;
    }
  }
`;

const CityName = styled.h3`
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
`;

export { CityNameWrapper, CityName };
