import styled from 'styled-components';

const Container = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: ${({theme}) => theme.paddings.app};
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: ${({theme}) => theme.widths.app};
`;

export {Container,Wrapper};
