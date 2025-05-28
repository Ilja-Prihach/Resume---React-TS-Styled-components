import styled from "styled-components";


export const Navigation = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Technologies</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
            </ul>
        </StyledNav>
    );
};

export default Navigation;

const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 80px;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
    }
`