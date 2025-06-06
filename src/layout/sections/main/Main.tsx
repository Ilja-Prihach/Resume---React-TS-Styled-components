
import photo from '../../../assets/images/My-photo.webp'
import drawingSVG from '../../../assets/images/drawing.svg';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {Container} from "../../../components/Container.tsx";




export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} >
                    <MainBox>
                        <MainTitle>My name is Ilja Prihach</MainTitle>
                        <MainDescription>I'm a web developer based in Minsk. I've been developing websites and applications since 2017. I can be useful for your business. </MainDescription>
                        <Button>Let’s Begin</Button>
                    </MainBox>
                    <BoxPhoto>
                        <Photo src={photo} alt="MyPhoto"/>
                    </BoxPhoto>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const Photo = styled.img`
    border-radius: 55px 0;
    max-width: 380px;
    max-height: 450px;
    object-fit: cover;
    z-index: 2;
    position: relative;
`

const StyledMain =  styled.section`
    display: flex;
    min-height: 100vh;
    overflow-x: clip;
`
const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 54px;
`
const MainDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #bcbcbc;
    padding-top: 15px;
    max-width: 480px;
    padding-bottom: 60px;
    text-align: left;
`
const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 673px;
`

const BoxPhoto = styled.div`
    position: relative;
    &::after {
        content: '';
        background: url(${drawingSVG}) no-repeat center; 
        background-size: contain; 
        width: 666px; 
        height: 666px; 
        position: absolute;
        left: -13%;
        transform: translateY(22%);
        z-index: 1;
    }
`