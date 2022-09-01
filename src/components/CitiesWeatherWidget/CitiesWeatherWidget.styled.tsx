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

export { Container };
