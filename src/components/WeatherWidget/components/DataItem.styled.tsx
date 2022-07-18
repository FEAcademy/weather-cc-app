import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 7px;
`;

const Label = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
`;

const Value = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

export { Container, Value, Label };
