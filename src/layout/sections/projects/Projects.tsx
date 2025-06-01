import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ProjectCard} from "./projectCard/ProjectCard.tsx";
import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import projectPhoto from "../../../assets/images/project.webp";
import {Container} from "../../../components/Container.tsx";




export const Projects = () => {
    return (
         <StyledProjects>
             <Container>
                 <Subtitle>Projects</Subtitle>
                 <FlexWrapper wrap={"wrap"} gap={"40px"}>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 1"}></ProjectCard>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 2"}></ProjectCard>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 3"}></ProjectCard>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 4"}></ProjectCard>
                 </FlexWrapper>
             </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

    min-height: 100vh;
`


