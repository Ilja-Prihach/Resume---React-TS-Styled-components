
import photo from '../../../assets/images/myPhoto.webp'
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
                        <MainTitle>Lorem ipsum dolor amet</MainTitle>
                        <MainDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </MainDescription>
                        <Button>Let’s Begin</Button>
                    </MainBox>
                    <div>
                        <Photo src={photo} alt="MyPhoto"/>
                    </div>
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
`

const StyledMain =  styled.section`
    display: flex;
    min-height: 100vh;
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
`
const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 673px;
`