
import Icon from "../icon/Icon.tsx";
import styled from "styled-components";


export const TehnologieSocial = () => {
    return (
        <StyledTehnologieSocial>
            <ul>
                <li>
                    <a href="">
                        <Icon iconId={'gitSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'githubSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'figmaSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </a>
                </li>
            </ul>
        </StyledTehnologieSocial>
    );
};


const StyledTehnologieSocial = styled.div`
    ul {
        display: flex;
        gap: 50px;
    }
`

