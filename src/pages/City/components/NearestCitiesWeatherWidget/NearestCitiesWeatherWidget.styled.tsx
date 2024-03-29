import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      order: 2;
    }
  }
`;

const ShortcutsWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1090px) {
    & {
      width: 630px;
    }

    & > * {
      display: flex;
      justify-content: center;
      margin-bottom: 70px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      width: 368px;
    }

    & > * {
      display: flex;
      justify-content: center;
    }
  }
`;

const NearestCitiesTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: rgba(112, 112, 112, 0.7);
  margin-top: 83px;
  margin-bottom: 68px;
  text-align: center;
  width: 100%;
`;

export { Container, NearestCitiesTitle, ShortcutsWrapper };
