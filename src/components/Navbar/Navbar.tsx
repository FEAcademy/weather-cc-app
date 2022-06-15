import { LogoText, NavContainer, Wrapper } from './Navbar.styled';

const Navbar = () => {
    return (
        <NavContainer>
            <Wrapper>
                <LogoText>Weather<span>ly</span></LogoText>
            </Wrapper>
        </NavContainer>
    );
};

export { Navbar };
