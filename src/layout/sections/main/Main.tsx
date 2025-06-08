
import photo from '../../../assets/images/My-photo.webp'
import drawingSVG from '../../../assets/images/drawing.svg';
import styled from "styled-components";
// import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";




export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <WrapperMain>
                    <MainBox>
                        <MainTitle>My name is Ilja Prihach</MainTitle>
                        <MainDescription>I'm a web developer based in Minsk. I've been developing websites and applications since 2017. I can be useful for your business. </MainDescription>
                        <Button>Let’s Begin</Button>
                    </MainBox>
                    <BoxPhoto>
                        <Photo src={photo} alt="MyPhoto"/>
                    </BoxPhoto>
                </WrapperMain>
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
    @media ${theme.media.largeDesktop} {
        padding-left: 10px;
    }
    @media ${theme.media.mobile} {
    max-width: 335px;
    height: 400px;
}
`

const StyledMain =  styled.section`
    min-height: 100vh;
    overflow-x: clip;
`
const WrapperMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
    }
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 54px;
    @media ${theme.media.tablet} {
        font-size: 44px;
    }
    @media ${theme.media.mobile} {
    font-size: 36px;
}
`
const MainDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #bcbcbc;
    padding-top: 15px;
    max-width: 480px;
    padding-bottom: 60px;
    text-align: left;
    @media ${theme.media.tablet} {
        padding-bottom: 30px;
    }
    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`
const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 673px;
    @media ${theme.media.tablet} {
        padding-top: 30px;
    }
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