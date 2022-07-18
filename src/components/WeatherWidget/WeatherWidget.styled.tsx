import styled from 'styled-components';
import { serializeDefraIndex } from 'utils/serializeDefraIndex';

const Container = styled.div<{ defraIndex?: number }>`
  background: ${({ theme, defraIndex }) =>
    !defraIndex ? theme.colors.background : theme.defraBackgrounds[serializeDefraIndex(defraIndex)]};
 
  color: ${({ theme, defraIndex }) =>
    (!defraIndex || defraIndex < 7)? theme.colors.text : theme.colors.lightText}; 
  box-shadow: 0px 10px 30px rgba(227, 227, 227, 0.5);

  & > div {
  border-bottom: 1px solid ${({ theme, defraIndex }) =>
    (!defraIndex || defraIndex < 7)? 'rgba(112, 112, 112, 0.5)' :  theme.colors.ligthtBorder};
  };
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
