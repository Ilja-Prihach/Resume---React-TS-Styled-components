import styled from "styled-components";
import Logo from "../../components/logo/Logo.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import Social from "../../components/social/Social.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import Icon from "../../../components/icon/Icon.t

export const MobileHeader = () => {
    return (
        <StyledMobileHeader>
            <Container>
                <BurgerButton>
                    <Icon iconId={'burgerMenu'} />
                </BurgerButton>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Logo/>
                    <Navigation/>
                    <Social/>
                </FlexWrapper>
            </Container>
        </StyledMobileHeader>
    );
};

const StyledMobileHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const BurgerButton = styled.button`
    height: calc(53px * 3);
    width: calc(35px * 3);

    path {
        stroke: #6231ae;
        stroke-width: 2;
        stroke-linecap: round;

        transition: .5s;

        &:nth-child(1) {
            stroke-dasharray: 13 100;
            stroke-dashoffset: -20;
        }

        &:nth-child(2),
        &:nth-child(3) {
            stroke-dasharray: 35 150;
            stroke-dashoffset: -55;
        }
    }

    &:hover path {
        &:nth-child(1) {
            stroke-dasharray: 22 100;
            stroke-dashoffset: -20;
        }

        &:nth-child(2),
        &:nth-child(3) {
            stroke-dasharray: 35 150;
            stroke-dashoffset: -64;
        }
    }

    &.active path {
        &:nth-child(1) {
            stroke-dasharray: 5 100;
            stroke-dashoffset: 20;
        }

        &:nth-child(2),
        &:nth-child(3) {
            stroke-dasharray: 32 150;
            stroke-dashoffset: 0;
        }
    }
`