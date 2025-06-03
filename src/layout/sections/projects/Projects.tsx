import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ProjectCard} from "./projectCard/ProjectCard.tsx";
import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import uber from "../../../assets/images/uber.jpg"
import pulse from "../../../assets/images/pulse.jpg"
import bread from "../../../assets/images/bread.jpg"
import mac from "../../../assets/images/mac.jpg"
import {Container} from "../../../components/Container.tsx";




export const Projects = () => {
    return (
         <StyledProjects>
             <Container>
                 <Subtitle>Projects</Subtitle>
                 <FlexWrapper wrap={"wrap"} gap={"60px 10px"} justify={"space-around"} grow={"1"}>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${uber}`} title={"Uber"}></ProjectCard>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${pulse}`} title={"RunSmart"}></ProjectCard>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${bread}`} title={"Bakery"}></ProjectCard>
                     <ProjectCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} src={`${mac}`} title={"Laptop store"}></ProjectCard>
                 </FlexWrapper>
             </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`


