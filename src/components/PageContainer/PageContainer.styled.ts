import styled from 'styled-components';

const Container = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.main.color};
    `;
const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.main.maxWidthLayout}
`;

export { Container, Wrapper };
