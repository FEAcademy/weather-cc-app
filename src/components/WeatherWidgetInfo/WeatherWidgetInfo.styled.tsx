import styled from 'styled-components';
import { serializeDefraIndex } from 'utils/serializeDefraIndex';

const Container = styled.div<{ defraIndex?: number }>`
  ${({ theme, defraIndex }) =>
    !defraIndex ? theme.colors.background : theme.defraBackgrounds[serializeDefraIndex(defraIndex)]};
  box-shadow: 0px 10px 30px rgba(227, 227, 227, 0.5);
  border-radius: 20px;
  width: 368px;
  height: 200px;
  padding: 30px 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 23px;
  grid-column-gap: 16px;
`;

export { Container };
