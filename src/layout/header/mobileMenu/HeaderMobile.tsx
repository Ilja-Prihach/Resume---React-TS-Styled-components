
import Logo from "../../../components/logo/Logo.tsx";
import Social from "../../../components/social/Social.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";


import styled, { css } from "styled-components";
import {useState} from "react";
import Icon from "../../../components/icon/Icon.tsx";


export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledMobileHeader>
            <Container>
                <HeaderContent>
                    <Logo />
                    <BurgerButton isOpen={isOpen} onClick={toggleMenu}>
                        <Icon
                            iconId={isOpen ? 'close' : 'burgerMenu'}
                            width="30"
                            height="30"
                            viewBox={isOpen ? "0 0 30 30" : "0 0 35 35"}
                        />
                    </BurgerButton>
                </HeaderContent>

                <MobileMenuWrapper isOpen={isOpen}>
                    <MobileNavigation>
                        <NavList>
                            <NavItem>
                                <NavLink href="#projects" onClick={toggleMenu}>
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#technologies" onClick={toggleMenu}>
                                    Technologies
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#experience" onClick={toggleMenu}>
                                    Experience
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </MobileNavigation>

                    <MobileSocial>
                        <Social />
                    </MobileSocial>
                </MobileMenuWrapper>

                <Overlay isOpen={isOpen} onClick={toggleMenu} />
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
    z-index: 9999;
    padding: 10px 0;
    height: 60px; /* Фиксированная высота */
    
    @media ${theme.media.tablet} {
        display: block;
    }
    
    @media (min-width: 769px) {
        display: none;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 10000;
    
    svg {
        transition: all 0.3s ease;
        stroke: #fff; /* Белый цвет для иконок */
        fill: none;
    }
    
    &:hover svg {
        stroke: #13adc7;
    }
`;

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(15, 22, 36, 0.75);;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9998;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; 
    gap: 180px;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    padding: 0; 
    
    ${props => props.isOpen && css`
        transform: translateX(0);
    `}
`;

const MobileNavigation = styled.nav`
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    list-style: none;
    text-align: center;
    width: 100%;
`;

const NavLink = styled.a`
    font-weight: 500;
    font-size: 24px;
    color: ${theme.colors.font};
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
        color: #13adc7;
    }
    
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background: linear-gradient(to right, rgba(153, 0, 255, 0.82), #00ffff);
        transition: width 0.3s ease;
    }
    
    &:hover::after {
        width: 100%;
    }
`;

const MobileSocial = styled.div`
    
    ul {
        display: flex;
        gap: 25px;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style: none;
    }
    
    svg {
        width: 32px;
        height: 32px;
    }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9997;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    ${props => props.isOpen && css`
        opacity: 1;
        visibility: visible;
    `}
`;