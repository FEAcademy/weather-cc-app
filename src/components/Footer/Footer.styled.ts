import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 31px 18px;
    height: 76px;
    display: flex;
    justify-content: center;
`;

const FooterText = styled.p`
    font-weight: 900;
    font-size: 12px;
    color: #707070;
    text-transform: uppercase;
`;

const RegularText = styled.span`
    font-weight: 600;
`;

const LightText = styled.span`
    font-weight: 300;
`;

export{StyledFooter, FooterText, RegularText, LightText};
