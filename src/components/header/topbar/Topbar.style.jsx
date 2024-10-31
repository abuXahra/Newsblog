import { FaDotCircle } from "react-icons/fa";
import { styled } from "styled-components";

export const TopbarWrapper = styled.div`
    width: 100%;
    background-color: #1E1E1E;
    color: white;
    height: 35px;
`

export const TopbarContent = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
`


export const TopbarContacts = styled.div`
    display: flex;
    gap: 10px;
    font-style: italic;

    span{    
        margin-left: 10px;
        gap: 10px
    }
`


export const TopbarSocial = styled.div`
    display: flex;
    font-size: 14px;
    gap: 20px;
`



export const TopbarMaquee = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        display: none;
    }
`

export const MarqueeData = styled.ul`
    text-decoration: none;
    display: flex;
    font-size: 12px;
    gap: 40px;
    
     li{
        align-items: center;
        text-decoration: none;
        list-style: none;
        padding: 15px 0;
        border-bottom: 1px solid gray;
        color: yellow;
     }
`


export const IconDot = styled(FaDotCircle)`
    font-size: 10px;
    color: yellow;
`