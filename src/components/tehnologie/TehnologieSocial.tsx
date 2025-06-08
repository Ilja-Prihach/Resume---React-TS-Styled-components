
import Icon from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


export const TehnologieSocial = () => {
    return (
        <StyledTehnologieSocial>
            <ul>
                <li>
                    <div>
                        <Icon iconId={'gitSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </div>
                </li>
                <li>
                    <div>
                        <Icon iconId={'githubSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </div>
                </li>
                <li>
                    <div>
                        <Icon iconId={'figmaSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </div>
                </li>
            </ul>
        </StyledTehnologieSocial>
    );
};


const StyledTehnologieSocial = styled.div`
    ul {
        display: flex;
        gap: 50px;
        @media ${theme.media.mobile} {
            gap: 25px;
        }
    }
`

