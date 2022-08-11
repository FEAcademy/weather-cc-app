import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 83px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: rgba(112, 112, 112, 0.7);
  margin-bottom: 63px;
`;

const ShortcutsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { ShortcutsContainer, Wrapper, Title };
