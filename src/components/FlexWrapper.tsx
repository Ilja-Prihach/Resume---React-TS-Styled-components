import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
    gap?: string
}



export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    justify-content: ${props => props.justify || undefined};
    align-content: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "1rem"};
`