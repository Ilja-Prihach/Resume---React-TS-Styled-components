import styled from "styled-components";
import Logo from "../../components/logo/Logo.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import Social from "../../components/social/Social.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Navigation/>
                    <Social/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    
    @media ${theme.media.tablet} {
        
    }
`