import styled from "styled-components";
import Logo from "../../components/logo/Logo.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import Social from "../../components/social/Social.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
            <Social/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #0f1624;
    display: flex;
    justify-content: space-around;
`