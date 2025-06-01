
import Icon from "../icon/Icon.tsx";
import styled from "styled-components";


export const TehnologieSocial = () => {
    return (
        <StyledTehnologieSocial>
            <ul>
                <li>
                    <Link href="">
                        <Icon iconId={'gitSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Icon iconId={'githubSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Icon iconId={'figmaSkill'} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </Link>
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

