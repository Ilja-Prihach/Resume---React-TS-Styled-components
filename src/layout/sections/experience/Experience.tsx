import styled from "styled-components";
import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import {EcperiensCard} from "../../../components/experience/EcperiensCard.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
// import {theme} from "../../../styles/Theme.tsx";



export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                    <Subtitle>Experience</Subtitle>
                    <CardWrapper>
                        <EcperiensCard experienceTitle={"2017"} experienceDescr={"I started to master the profession of a front-end developer, studied the basics of HTML, CSS and JavaScript"}/>
                        <EcperiensCard experienceTitle={"2019"} experienceDescr={"Got my first commercial experience, mastered the modern tool React.js"}/>
                        <EcperiensCard experienceTitle={"2021"} experienceDescr={"Worked in a team on large projects, delved into application architecture, mastered TypeScript, Node.js and GraphQL"}/>
                        <EcperiensCard experienceTitle={"2023"} experienceDescr={"Managed complex projects, actively used Next.js, Nuxt.js, Gatsby, optimized performance, implemented progressive technologies."} />
                    </CardWrapper>
            </Container>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    min-height: 600px;

`
const CardWrapper = styled.div`
    display: flex;
    gap: 35px;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 78%;
        height: 8px;
        border-radius: 83px;
        background: ${theme.colors.accent};
        left:50%;
        top: 51px;
        transform: translate(-50%,-50%);
        z-index: 1;
    }
`
