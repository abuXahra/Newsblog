import { styled } from "styled-components";


export const ButtonWrapper = styled.button`
    padding: 10px;
    background-color: ${({ btnColor }) => btnColor || "red"};
    color: white;
    border: none;
    cursor: pointer;
`