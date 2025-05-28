import styled from "styled-components";
import Social from "../../components/social/Social.tsx";
import {Contacts} from "../../components/contacts/Contacts.tsx";
import {theme} from "../../styles/Theme.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Contacts contactsTitle={"Call me:"} contactsContent={"123-456-789"}/>
            <Contacts contactsTitle={"Email:"} contactsContent={"xxx@xyz.com"}/>
            <Social/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg} ;
    min-height: 150px;
    display: flex;
    justify-content: space-around;
`
