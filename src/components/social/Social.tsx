import Icon from "../icon/Icon.tsx";
import styled from "styled-components";


export const Social = () => {
    return (
        <StyledSocial>
            <ul>
                <li>
                    <Link href="#">
                        <Icon iconId={'githubNav'} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Icon iconId={'linkedinNav'} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Icon iconId={'telegramNav'} />
                    </Link>
                </li>
            </ul>
        </StyledSocial>
    );
};

export default Social;

const StyledSocial = styled.nav`
    ul {
        display: flex;
        gap: 25px;
    }
    li {
        position: relative;
        transition: all 0.5s ease-in-out;
    }
`
const Link = styled.a`
    &:hover > * {
        transform: scale(1.15);
        filter: drop-shadow(0 0 10px rgb(225, 28, 222)); 
    }
`;