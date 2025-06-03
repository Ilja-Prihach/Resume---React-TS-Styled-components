import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
    gap?: string
    grow?: string
}



export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    justify-content: ${props => props.justify || undefined};
    align-items: ${props => props.align || undefined};
    flex-wrap: ${props => props.wrap || undefined};
    gap: ${props => props.gap || undefined};
    flex-grow: ${props => props.grow || undefined};
    height: 100%;
`