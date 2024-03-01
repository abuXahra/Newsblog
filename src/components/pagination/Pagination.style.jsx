import styled from "styled-components";


export const PaginationStyled = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem; 
`

export const PaginationButton = styled.button`
    margin-right: 0.5rem;
    cursor: pointer;
    padding: 7px 15px;

    button:disabled{
        background-color: #333;
        color: #fff;
        cursor: not-allowed;
}
`