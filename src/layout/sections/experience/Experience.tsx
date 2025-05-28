import styled from "styled-components";
import {Subtitle} from "../../../components/subTitle/Subtitle.tsx";
import {EcperiensCard} from "../../../components/experience/EcperiensCard.tsx";



export const Experience = () => {
    return (
        <StyledExperience>
            <Subtitle>Experience</Subtitle>
            <EcperiensCardWrapper>
                <EcperiensCard experienceTitle={"2017"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                <EcperiensCard experienceTitle={"2019"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                <EcperiensCard experienceTitle={"2021"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                <EcperiensCard experienceTitle={"2023"} experienceDescr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
            </EcperiensCardWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    
    min-height: 600px;
`

const EcperiensCardWrapper = styled.div`
    display: flex;
    gap: 35px;
`