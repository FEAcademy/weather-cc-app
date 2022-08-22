import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectContainer = styled.div`
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      margin: 30px 0 0 0;
    }
  }
`;

const WidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.widths.tablet}) {
    & {
      flex-direction: column;
      align-items: center;
    }

    & > div {
      margin: 20px 0;
    }
  }
`;

export { WidgetWrapper, SelectContainer, Container };
