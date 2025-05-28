import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ProjectCard} from "./projectCard/ProjectCard.tsx";
import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import projectPhoto from "../../../assets/images/project.webp";



export const Projects = () => {
    return (
         <StyledProjects>
            <Subtitle>Projects</Subtitle>
            <FlexWrapper wrap={"wrap"} gap={"42px"}>
                <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 1"}></ProjectCard>
                <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 2"}></ProjectCard>
                <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 3"}></ProjectCard>
                <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${projectPhoto}`} title={"Project 4"}></ProjectCard>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #161d2a;
`


