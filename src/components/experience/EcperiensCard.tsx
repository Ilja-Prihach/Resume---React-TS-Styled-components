import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
// import {FlexWrapper} from "../FlexWrapper.tsx";

type EcperiensCardPropsType = {
    experienceTitle: string
    experienceDescr: string
    isLast?: boolean
}

export const EcperiensCard = (props: EcperiensCardPropsType) => {
    return (
        <StyledEcperiensCard>
                <EcperiensCardTitle isLast={props.isLast}>{props.experienceTitle}</EcperiensCardTitle>
                <EcperiensCardDescr>{props.experienceDescr}</EcperiensCardDescr>
        </StyledEcperiensCard>

    );
};

const StyledEcperiensCard = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.media.tablet} {
        width: 400px;
        align-items: flex-start;
    }
    @media ${theme.media.mobile} {
        width: 300px;
    }
`
const EcperiensCardTitle = styled.h3<{ isLast?: boolean }>`
    font-weight: 600;
    font-size: 26px;
    text-align: center;
    position: relative;
    padding-bottom: 25px;
    &::before{
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: ${theme.colors.font};
        left:50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: 2;
        @media ${theme.media.tablet} {
            //transform: translateY(25%);
            bottom: 33px;
            left: -50px;
        }
        @media ${theme.media.mobile} {
        left: -40px;
    }
    }
    // &::after{
    //     content: "";
    //     position: absolute;
    //     width: calc(100% + 10%);
    //     height: 8px;
    //     border-radius: 83px;
    //     background: ${theme.colors.accent};
    //     bottom: 8px;
    //     left:100%;
    //     transform: translateX(-45%);
    //     z-index: 1;
    //
    //     ${({ isLast } ) => isLast && `
    //         display: none; 
    //     `}
    // }
`


const EcperiensCardDescr = styled.p`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding-top: 20px;
    @media ${theme.media.tablet} {
        padding-top: 0px;
        text-align: left;
    },
    @media ${theme.media.mobile} {
        font-size: 16px;
}
`
