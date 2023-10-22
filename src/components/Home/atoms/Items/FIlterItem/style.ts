import styled from "@emotion/styled"

interface FilterItemPropstype {
    value: boolean
    role: "member" | "admin"
}

export const FilterItemWrapper = styled.div<FilterItemPropstype>`
    height: fit-content;
    width: fit-content;
    padding: 0.6rem 1.1rem;
    border-radius: 0.3rem;
    background-color: ${props => props.value ? (props.role === "admin" ? "#865DFF" : "#FFA559") : "none"};
    color: ${props => props.value ? "#fff" : "#C2C2C2"};
    font-size: 14px;
    font-weight: 600;
    border: 1px solid ${props => props.value ? "#fff" : "#D9D9D9"};`