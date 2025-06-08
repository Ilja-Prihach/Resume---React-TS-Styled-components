import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


export const Navigation = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link href="#">Projects</Link>
                </li>
                <li>
                    <Link href="#">Technologies</Link>
                </li>
                <li>
                    <Link href="#">About me</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

export default Navigation;

const StyledNav = styled.nav`
    position: relative;
    display: inline-block;
    ul {
        display: flex;
        gap: 80px;
        @media ${theme.media.largeDesktop} {
            gap: 15px;
        }
    }
    a {
        font-weight: 500;
        font-size: 16px;
        position: relative; 
        overflow: hidden; 
    }

`;

const Link = styled.a`
    &::after,
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, rgba(153, 0, 255, 0.82), #00ffff);
        //background: linear-gradient(to right, #ff0000, #00ffff);
        bottom: -5px;
        left: 0;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s ease-out;
    }

    &::before {
        top: -5px;
        transform-origin: left;
    }

    &:hover::after,
    &:hover::before {
        transform: scaleX(1);
    }
`;