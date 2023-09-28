
import { Link } from "react-router-dom"
import styled from "styled-components"

export const SidebarWrapper = styled.div`
    width: 100;
`


export const RecentPostWrapper = styled.div`
display: flex;
flex-direction: column;
    width: 100;
`
export const MarginTop = styled.div`
    width: 100%;
    height: ${({ mt }) => mt || "30px"};
`
export const CategorList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
   
`



export const CategoryListItem = styled.div`
    border-bottom: ${({ lastItemBorder }) => lastItemBorder || "1px"}  solid #80808078;
    gap: 20px;
    padding-top: ${({ pdtop }) => pdtop || "10px"};
    padding-bottom: 10px;
    display: flex;
    width:  100%;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 16px;
        color: #00161f;
    }

    div{
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: ${({ bcolor }) => bcolor || "#013cef87"} ;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-weight: bold;
    }
`




export const RecentPost = styled.div`
    display: flex;
    width: 100%;
    border-bottom: ${({ lastItemBorder }) => lastItemBorder || "1px"}  solid #80808078;
    gap: 20px;
    padding-top: ${({ pdtop }) => pdtop || "20px"};
    padding-bottom: 15px;

`

/* Recentpost content styling*/
export const RecentPostImg = styled.div`
    width: 100px;
    img{
        width: 100%;
    }
`
export const RecentPostContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
`


export const PostTitleStyled = styled.div`
    font-size: ${({ fnt }) => fnt || "12px"};
    font-weight: bold;
    color: #010117;
    line-height:  ${({ lingHeight }) => lingHeight || "20px"}  ;
    cursor: pointer;

    &:hover{
        color: #99b899;
    }
`
export const PostIconStyled = styled.div`
 display: flex; 
`
export const EditStyled = styled.div`
color: grey;
display: flex;
font-size: 10px;
`

export const EditIconStyled = styled.div`
color: gray;
display: flex;
`
export const EditTitledStyled = styled.div`
color: gray;
display: flex;
margin-left: 10px;
`

export const DateStyled = styled.div`
color: gray;
display: flex;
font-size: 10px;
padding-left: 20px;
`
export const DateIconStyled = styled.div`
color: gray;
display: flex;
`
export const DateTitledStyled = styled.div`
color: gray;
display: flex;
margin-left: 10px;
`
export const PostLink = styled(Link)`
    text-decoration: none;
    color: ${({ linkColor }) => linkColor || "blue"} ;
`

/* Recentpost Category styling*/
export const PostCategory = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`

export const CatWrapper = styled.div`
    width: 100%;
    display: flex;
    position: sticky;
    top: ${({ fxTp }) => fxTp || ""};
    flex-direction: ${({ flDir }) => flDir || "row"};
    gap: ${({ gp }) => gp || "30px"};
margin-bottom: 30px;
`
export const EnterCat = styled.div`
width: 50%;
`


export const Ads = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border: 2px solid black;

    img{
        width: 100%;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

export const SocialListItem = styled.div`
    border-bottom: ${({ lastItemBorder }) => lastItemBorder || "1px"}  solid #80808078;
    gap: 20px;
    padding-top: ${({ pdtop }) => pdtop || "10px"};
    padding-bottom: 10px;
    display: flex;
    width:  100%;
    justify-content: space-between;
    align-items: center;

    span{
        display: flex;
        font-size: 25px;
        gap: 10px;
        align-items: center;
        color: ${({ bcolor }) => bcolor || "blue"} ;

        b{
            font-size: 12px;
            color: #4c4c4c;
        }
        h3{
            font-size: 12px;
            color:#80808078;
        }
    }
    
    div{
        color: ${({ bcolor }) => bcolor || "#013cef87"} ;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
`



export const SubscibeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

   p{
    color : gray;
   };

   form{
    display: flex;
    flex-direction: column;
    gap: 10px;

 
   }
`

export const InputStyled = styled.div` 

display:  flex;
flex-direction: column;
gap: 5px;

label{
font-size: 12.5px;
color : gray;
}

input{
        border: none;
        background-color:    #80808016;
        padding: 10px;

        &:focus{
            outline: none;
        }
    }
`


