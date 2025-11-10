
import {Button} from "../../../../components/button/Button.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";

type ProjectCardPropsType = {
    src:  string
    title: string
    description: string
}


export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <CardWrapper>
            <ProjectImg src={props.src} alt="Project photo"/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectDescr>{props.description}</ProjectDescr>
            <Button>Look It Up</Button>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #a39d9d;
    border-radius: 50px 0;
    width: 459px;
    min-height: 670px;
    background-color: ${theme.colors.primaryBg};
    padding: 25px;
    gap: 50px;
    transition: transform 0.3s ease; 

    &:hover {
        transform: translateY(-5px);
    }

    @media ${theme.media.largeDesktop} {
        width: 560px;
    }
`

const ProjectImg = styled.img`
    border-radius: 24px 8px 8px 8px;
    width: 100%;
    height: 280px;
    object-fit: cover;
`

const ProjectTitle = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 89%;
    margin: 0 auto;
    
    position: relative;
    
    &::before{
        content: "";
        display: inline-block;
        border-radius: 83px;
        width: 300px;
        height: 4px;
         background: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -23px;
        transform: translateX(-50%);
    }
`
const ProjectDescr = styled.p`
    font-weight: 500;
    font-size: 18px;
    padding-top: 25px;
`

