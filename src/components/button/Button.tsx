import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


export const Button = styled.button`
    border-radius: 83px;
    width: 240px;
    height: 60px;
    background: ${theme.colors.accent};
    font-weight: 600;
    font-size: 20px;
    color: ${theme.colors.font};
    position: relative;
    cursor: pointer;
    z-index: 0;

    &::before {
        content: '';
        //background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        background: linear-gradient(45deg, #086ced, #aa00ff, rgba(153, 0, 255, 0.82), #003cff, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 83px;
    }

    &:hover::before {
        opacity: 1; /* Показываем при наведении */
    }

    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${theme.colors.accent};
        left: 0;
        top: 0;
        border-radius: 83px;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }

    &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }
`