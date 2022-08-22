import styled from 'styled-components';

const CityName = styled.h3`
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 42px;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      margin-top: 42px;
    }
  }
`;

export { CityName };
