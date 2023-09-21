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
    gap: 30px;
    display: flex;
`


export const FooterAbout = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;

    img{
        width: 200px
    }
`




export const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    color: gray;
`


export const FooterRecentPost = styled.div`
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
`
export const PostLink = styled(Link)`
color: gray;
text-decoration: none;
&:hover{
   color: #e1e1e1
}
`


export const FooterCopyright = styled.div`
    width: 100%;
    background-color: #1c1c1c;
    height: auto;
    padding: 20px 0;
    font-size: 13px;

    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        span{
            display: flex;

            ul {
                display: flex;
                list-style: none;
                gap: 20px;
            }
        }
        
    }
`