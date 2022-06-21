import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const FooterText = styled.p`
  font-weight: 900;
  color: #707070;
  font-size: 12px;
  text-transform: uppercase;
  > span {
    font-weight: 300;
  }
  > span:nth-child(2) {
    font-weight: 600;
  }
`;

export { StyledFooter, FooterText };
