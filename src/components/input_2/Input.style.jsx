
import styled from "styled-components";


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({InputWidth})=> InputWidth || "100%"};
    gap: 5px;
`

export const InputLabel = styled.label`
    color: grey;
    font-size: 12px;
    display: flex;
    align-items: center;    
`

export const InputStyle = styled.input`
    border: 1px solid white; 
    border-radius: 10px;
    padding: ${({inputPadding})=>inputPadding || '15px'};
    background-color: transparent;
    color: white;
    width: 100%;

    &:focus {
    outline: none;

  }
`

export const InputError = styled.span`
    color: red;
    font-size: 12px;
`