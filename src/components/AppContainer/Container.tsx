import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
};

const AppWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 76px;
`;

const Container = ({ children }: Props) => {
    return (
        <AppWrapper>{children}</AppWrapper>
    );
};

export { Container };
