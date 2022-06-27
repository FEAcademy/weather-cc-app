import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: ${({theme}) => theme.appPadding};
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: ${({theme}) => theme.appMaxWidth};
`;

export {Container,Wrapper};
