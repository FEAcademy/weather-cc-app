import styled from 'styled-components';

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

export { ShortcutsWrapper };
