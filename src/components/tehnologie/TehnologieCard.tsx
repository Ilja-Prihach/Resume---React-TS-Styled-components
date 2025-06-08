
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";



type TehnologieCardPropsType = {
    tehnologieTitle?: string
    progress?: number
}


export const TehnologieCard = (props: TehnologieCardPropsType) => {
    return (
        <StyledTehnologieProgress>
                <TehnologieTitle>{props.tehnologieTitle}</TehnologieTitle>
                <TehnologieProgress superprogress={props.progress} />
        </StyledTehnologieProgress>
    );
};

const StyledTehnologieProgress =  styled.div``

const TehnologieTitle = styled.h2`
    font-weight: 600;
    font-size: 26px;
    padding-left: 15px;
`

const TehnologieProgress = styled.div<{ superprogress?: number }>`
    background-color: #162950;
    width: 900px;
    height: 17px;
    border-radius: 83px;
    @media ${theme.media.largeDesktop} {
        width: 710px;
    }
    @media ${theme.media.tablet} {
        width: 530px;
    }
    @media ${theme.media.mobile} {
        width: 330px;
    }
    //overflow: hidden;
    &::before {
        content:'';
        width: ${props => props.superprogress || 0}%;
        height: 100%;
        display: block;
        background-image: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    }

`