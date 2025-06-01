import styled from "styled-components";
import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import {EcperiensCard} from "../../../components/experience/EcperiensCard.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
// import {theme} from "../../../styles/Theme.tsx";



export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                {/*<WrapperExperiens>*/}
                    <Subtitle>Experience</Subtitle>
                    <FlexWrapper gap={"35px"}>
                        <EcperiensCard experienceTitle={"2017"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                        <EcperiensCard experienceTitle={"2019"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                        <EcperiensCard experienceTitle={"2021"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                        <EcperiensCard experienceTitle={"2023"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."} isLast={true}/>
                    </FlexWrapper>
                {/*</WrapperExperiens>*/}
            </Container>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    min-height: 600px;

`
// const WrapperExperiens = styled.div`
//     position: relative;
//     &::after{
//         content: "";
//         position: absolute;
//         width: calc(100%);
//         height: 8px;
//         border-radius: 83px;
//         background: ${theme.colors.accent};
//         left:50%;
//         top: 50%;
//         transform: translate(-50%,-50%);
//         z-index: 1;
//     }
// `
