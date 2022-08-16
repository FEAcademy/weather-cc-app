import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export { Container, NearestCitiesTitle };
