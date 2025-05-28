import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {TehnologieSocial} from "../../../components/tehnologie/TehnologieSocial.tsx";
import {TehnologieCard} from "../../../components/tehnologie/TehnologieCard.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Tehnologies = () => {
    return (
        <StyledTehnologies>
            <Subtitle>Technologies</Subtitle>
            <TehnologieCard tehnologieTitle={"Html"} progress={85}/>
            <TehnologieCard tehnologieTitle={"Css, Sass"} progress={80}/>
            <TehnologieCard tehnologieTitle={"React"} progress={50}/>
            <TehnologieCard tehnologieTitle={"Styled components"} progress={65}/>
            <FlexWrapper direction="column" wrap="wrap">
                <TehnologiesSubtitle>Additional technologies and skills</TehnologiesSubtitle>
                <TehnologieSocial/>
            </FlexWrapper>
        </StyledTehnologies>
    );
};

export const StyledTehnologies = styled.section`
    background-color: ${theme.colors.secondaryBg};
    min-height: 100vh;
`

export const TehnologiesSubtitle = styled.h2`
    font-weight: 600;
    font-size: 44px;
    color: #fff;
`