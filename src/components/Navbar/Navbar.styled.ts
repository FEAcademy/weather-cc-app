import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.backgroundWithOpacity};
  padding: ${({ theme }) => theme.size.basePadding};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.size.baseWidth};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.text};
  text-transform: uppercase;

  & span {
    font-weight: ${({ theme }) => theme.font.weight.light};
  }
`;

export { Logo, Wrapper, Container };
