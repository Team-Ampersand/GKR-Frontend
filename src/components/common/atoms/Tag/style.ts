import styled from "@emotion/styled"

interface tagWrapperProps {
    BackgroundColor: string
}

export const tagWrapper = styled.div<tagWrapperProps>`
    background-color: ${props => props.BackgroundColor};
    width: 4rem;
    height: 1.5rem;
    font-size: 10px;
    font-weight: 900;
    color: #fff;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`