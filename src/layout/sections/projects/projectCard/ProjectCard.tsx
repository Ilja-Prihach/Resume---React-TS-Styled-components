
import {Button} from "../../../../components/button/Button.tsx";
import styled from "styled-components";

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
    width: 550px;
    height: 670px;
    background-color: #0f1624;
    padding: 25px;
    gap: 50px;
`

const ProjectImg = styled.img`
    border-radius: 24px 8px 8px 8px;
    width: 500px;
    height: 280px;
    object-fit: cover;
`

const ProjectTitle = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 89%;
    color: #fff;
`
const ProjectDescr = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #fff;
`

