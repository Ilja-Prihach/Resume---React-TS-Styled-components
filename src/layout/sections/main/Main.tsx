
import photo from '../../../assets/images/myPhoto.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";




export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
                <MainBox>
                    <MainTitle>Lorem ipsum dolor amet</MainTitle>
                    <MainDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </MainDescription>
                    <Button>Let’s Begin</Button>
                </MainBox>
                <div>
                    <Photo src={photo} alt="MyPhoto"/>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};


const Photo = styled.img`
    border-radius: 55px 0;
    width: 380px;
    height: 450px;
    object-fit: cover;
`

const StyledMain =  styled.section`
    
    min-height: 100vh;
`
const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 54px;
    color: #fff;
`
const MainDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #bcbcbc;
`
const MainBox = styled.div`
    max-width: 673px;
`