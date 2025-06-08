import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {TehnologieSocial} from "../../../components/tehnologie/TehnologieSocial.tsx";
import {TehnologieCard} from "../../../components/tehnologie/TehnologieCard.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";


export const Tehnologies = () => {
    return (
        <StyledTehnologies>
            <Container>
                <Subtitle>Technologies</Subtitle>
                <CardWrapper >
                    <TehnologieCard tehnologieTitle={"Html"} progress={85}/>
                    <TehnologieCard tehnologieTitle={"Css, Sass"} progress={80}/>
                    <TehnologieCard tehnologieTitle={"React"} progress={50}/>
                    <TehnologieCard tehnologieTitle={"Styled components"} progress={65}/>
                </CardWrapper>
                <FlexWrapper direction="column" align={"center"} gap={"70px"} >
                    <TehnologiesSubtitle>Additional technologies and skills</TehnologiesSubtitle>
                    <TehnologieSocial/>
                </FlexWrapper>
            </Container>
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
    @media ${theme.media.mobile} {
        font-size: 27px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding-bottom: 120px;
    @media ${theme.media.tablet} {
        padding-bottom: 100px;
    }
`