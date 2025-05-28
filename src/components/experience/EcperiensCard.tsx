import styled from "styled-components";

type EcperiensCardPropsType = {
    experienceTitle: string
    experienceDescr: string
}

export const EcperiensCard = (props: EcperiensCardPropsType) => {
    return (
        <StyledEcperiensCard>
            <EcperiensCardTitle>{props.experienceTitle}</EcperiensCardTitle>
            <EcperiensCardDescr>{props.experienceDescr}</EcperiensCardDescr>
        </StyledEcperiensCard>
    );
};

const StyledEcperiensCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    
`

const EcperiensCardTitle = styled.h3`
    font-weight: 600;
    font-size: 26px;
    color: #fff;
    text-align: center;
    position: relative;
    display: inline-block;
    padding-bottom: 25px;
    &::before{
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #fff;
        left:50%;
        transform: translateX(-50%);
        bottom: 0;
    }
`
const EcperiensCardDescr = styled.p`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #fff;
`
