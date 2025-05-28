import Icon from "../icon/Icon.tsx";
import styled from "styled-components";


export const Social = () => {
    return (
        <StyledSocial>
            <ul>
                <li>
                    <a href="#">
                        <Icon iconId={'githubNav'} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon iconId={'linkedinNav'} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon iconId={'telegramNav'} />
                    </a>
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
`