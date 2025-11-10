import Icon from "../icon/Icon.tsx";
import styled from "styled-components";


export const Social = () => {
    return (
        <StyledSocial>
            <ul>
                <li>
                    <Link href="https://github.com/Ilja-Prihach"
                          target="_blank">
                        <Icon iconId={'githubNav'} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/ilja-prihach-298204172"
                          target="_blank">
                        <Icon iconId={'linkedinNav'} />
                    </Link>
                </li>
                <li>
                    <Link href="https://t.me/Ilja_prihach"
                          target="_blank">
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
        filter: drop-shadow(0 0 10px rgb(28, 202, 225));
    }
`;