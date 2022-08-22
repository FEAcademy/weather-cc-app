import styled from 'styled-components';

const Container = styled.div`
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

export { Container };
