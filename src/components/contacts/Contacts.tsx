import styled from "styled-components";

type ContactPropsType = {
    contactsTitle: string;
    contactsContent: string;
}

export const Contacts = (props: ContactPropsType) => {
    return (
        <StyledContacts>
            <ContactsTitle>{props.contactsTitle}</ContactsTitle>
            <ContactsContent>{props.contactsContent}</ContactsContent>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
display: flex;
flex-direction: column;
`

const ContactsTitle = styled.h3`
    font-weight: 600;
    font-size: 22px;
    color: #fff;
`

const ContactsContent = styled.p`
    font-weight: 600;
    font-size: 22px;
    color: #fff;
`