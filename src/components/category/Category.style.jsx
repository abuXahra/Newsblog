import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CategoryWraper = styled.div`
    width: 100%;
    height: auto;
`

export const CategoryTitle = styled.div`
    width: 100%;    
    background-color: #1c1c1c;
    color: white;
    div{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    display: flex;
    align-items: center;
  
    }

`

export const CategoryContent = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 30px;


        @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

export const CategoryPostsWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 40px 0;

            @media (max-width: 768px) {
   
        width: 100%;
        padding: 20px;
  
    }
`


export const CategoryPosts = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 10px;

`



export const CategoryPostsImag = styled.div`
    width: 30%;
    img{
        width: 100%
    }
`

export const CategoryPostsText = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    justify-content:center;

    p{
        color: grey;
        font-size: 12px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    /* span{
        background-color: grey;
        color: white;
        padding: 10px;
        width: 100px;
    } */

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



// SIDEBAR
export const CategorySidbar = styled.div`
    width: 30%;
    padding: 20px 0;
    @media (max-width: 768px) {

        width: 100%;
        padding: 20px;
    }

`