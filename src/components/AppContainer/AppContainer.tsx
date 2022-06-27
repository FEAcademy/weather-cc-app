import { PropsWithChildren } from 'react';
import { DataTestIDS } from 'utils/data-test-ids';
import { Container, Wrapper } from './AppContainer.styled';

const AppContainer = ({children} : PropsWithChildren) => (
    <Container data-testid={DataTestIDS.AppContainer}>
        <Wrapper>{children}</Wrapper>
    </Container>
);

export {AppContainer};
