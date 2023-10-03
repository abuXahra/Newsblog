
import { Link } from "react-router-dom";
import { styled } from "styled-components";



export const LinkWrapper = styled(Link)`
    padding:  ${({ linkPd }) => linkPd || "10px"};
    background-color: ${({ linkColor }) => linkColor || "red"};
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    margin-top: 10px;
    display: ${({ linkDisplay }) => linkDisplay || "inline-block"} ;
`