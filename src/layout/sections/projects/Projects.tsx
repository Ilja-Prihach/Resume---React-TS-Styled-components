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
         <StyledProjects id="projects">
             <Container>
                 <Subtitle>Projects</Subtitle>
                 <FlexWrapper wrap={"wrap"} gap={"60px 10px"} justify={"space-around"} grow={"1"}>
                     <ProjectCard
                         description={"Adaptive landing page for taxi service. Implemented complex order form with validation and interactive map."}
                         src={`${uber}`}
                         title={"Uber"}
                     />
                     <ProjectCard
                         description={"Online store of smart watches with filtering system, shopping cart and payment system integration."}
                         src={`${pulse}`}
                         title={"RunSmart"}
                     />
                     <ProjectCard
                         description={"Website for a bakery with product catalog, order system and content management system for the owner."}
                         src={`${bread}`}
                         title={"Bakery"}
                     />
                     <ProjectCard
                         description={"E-commerce platform for laptop sales with product comparison, reviews and order tracking system."}
                         src={`${mac}`}
                         title={"Laptop store"}
                     />
                 </FlexWrapper>
             </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`


