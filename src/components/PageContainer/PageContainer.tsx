import React from 'react';
import { Container, Wrapper } from './PageContainer.styled';

type Props = {
    children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
    return (
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    );
};

export { PageContainer };
