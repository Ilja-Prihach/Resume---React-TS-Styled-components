import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font}
    }
    
    a{
        text-decoration: none;
        color: ${theme.colors.font}; 
    }
    
    ul {
        list-style: none;
    }
    
    li {
        color: ${theme.colors.font};
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section {
        padding: 100px 0px 140px;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }
    
    

`