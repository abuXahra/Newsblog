import { Link } from "react-router-dom"
import styled from "styled-components"


export const FooterWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #444444;
    justify-content: center;
    align-items: center;
   color : gray;
`


export const FooterContent = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin: 60px 0;
    height: auto;
    display: flex;

    @media (max-width: 786px) {
        flex-direction: column;
    }
`


export const FooterAbout = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    img{
        width: 200px
    }

    @media (max-width: 786px) {
        width: 100%;  
        margin-bottom: 30px;
    }
`




export const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    color: gray;
`


export const FooterRecentPost = styled.div`
width: 33%;
padding: 0 30px;
   display: flex;
        flex-direction: column;
    ul{
        font-size: 12px;
     li{
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid gray;
     }
    }

    @media (max-width: 786px) {
        width: 100%; 
        margin-bottom: 30px;
        padding: 0;
    }
`
export const PostLink = styled(Link)`
color: ${({linkColor})=> linkColor || 'gray'};
display: flex;
align-items: center;
text-decoration: none;
gap: 5px;
&:hover{
   color: #e1e1e1
}
`


export const FooterCopyright = styled.div`
    width: 100%;
    background-color: #1c1c1c;
    height: auto;
    padding: 20px 0;
    font-size: 12px;

`


export const FooterCopyrightContent = styled.div`

        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        span{
            display: flex;
            width: 50%;

            div {
                display: flex;
                list-style: none;
                gap: 20px;
            }
        }

        & span:nth-child(2){
          justify-content: flex-end;
        }    
  
        @media (max-width: 786px) {
            flex-direction: column;
            gap: 10px;
            span{
                width: 100%;
            }
            & span:nth-child(1){
          
                justify-content: center;
                align-items: center;
            }

            & span:nth-child(2){
                align-items: center;
                justify-content: center;
        } 
    }

`