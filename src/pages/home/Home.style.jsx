import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const HomeWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`


export const HomeTopSection = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    height: auto;
    gap: 30px;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`
export const HomeTopSectionLeft = styled.div`
width: 70%;
height: 100%;
gap: 40px;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
        width: 100%;
    }

`


export const HomeTopSectionContent = styled.div`
    display: flex;
    width: 100%;
   flex-wrap: wrap;
   gap: 38.4px;

   @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
  `

export const WrapperDiv = styled.div`
        width: ${({ w }) => w || "47.4%"};
        cursor: pointer;
        height: ${({ h }) => h || "300px"}; ;
        display: ${({ dsp }) => dsp || "flex"};
        background-color: gray;
        background-image: url(${({ bg }) => bg || "none"});
        background-position: center;
        background-size: cover;
        flex-direction: ${({ flDir }) => flDir || "column"} ;
        p{
            color:grey;
            font-size: 14px;
            line-height: 25px;
         margin: 10px 0;
         width: 100%;
        }

        @media (max-width: 768px) {
        width: 100%;
        height: ${({ ht }) => ht || "400px"} ;
    }
    `



export const HomeTopSectionRight = styled.span`
width: 30%;
height: 100%;

hr{
    border: 1.5px solid #000;
    margin-top: 5px;
}

@media (max-width: 768px) {
        width: 100%;
    }
`


export const HomeTopSectionRightContent = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`


export const HomePostSlideSection = styled.div`
    margin-top: 70px;
    margin-bottom: 40px;
    width: 100%;
    height: auto;
    img{
       height: 'auto';
    }
`


export const RecentWrapper = styled.div`
width: 90%;
/* background-color: red; */
display: flex;
gap: 30px;
margin-left: auto;
margin-right: auto;

    @media (max-width: 786px) {
        flex-direction: column-reverse;
    }
`

export const RecentPostWrapper = styled.div`
display: flex;
flex-direction: column;
    width: 30%;
    height: auto;

        @media (max-width: 786px) {
        width: 100%;
    }
`
export const MarginTop = styled.div`
    width: 100%;
    height: 30px;
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
    margin: 10px 0;
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
    font-size:  ${({ linkFontSize }) => linkFontSize || "13px"}  ;
    color: ${({ linkColor }) => linkColor || "blue"} ;
    display: ${({ dsp }) => dsp || "flex"};
`

/* Recentpost Category styling*/
export const PostCategory = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;

    @media (max-width: 786px) {
      width: 100%;
    }
`

export const CatWrapper = styled.div`
    width: 100%;
    display: flex;
    position: sticky;
    top: ${({ fxTp }) => fxTp || ""};
    flex-direction: ${({ flDir }) => flDir || "row"};
    gap: ${({ gp }) => gp || "30px"};
    margin-bottom: 50px;

    @media (max-width: 786px) {
        flex-direction: column;
    }
`
export const EnterCat = styled.div`
width: 50%;
flex-direction: column;


@media (max-width: 786px) {
        flex-direction: column;
        width: 100%;
    }
`

export const EnterRecent = styled.div`
width: 50%;

    @media (max-width: 786px) {
       width: 100%;
    }
`


export const FashionCat = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 30px;
`



export const FashionCatImag = styled.div`
    width: 35%;
    img{
        width: 100%
    }
`

export const FashionCatText = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    cursor: pointer;

    p{
        color: grey;
        font-size: 13px;
    }
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





export const VideoWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 20px;
cursor: pointer;
`

export const VideoTitle = styled.span`
    font-size: 13px;
    font-weight: bold;
`

export const VideoOverlay = styled.div`
background-color: #000000a7;
  position: relative;
  height: 100%;
  width: 100%;
`

export const VideoCover = styled.div`
background-image: url(${({ bg }) => bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
width: 100%;
height: 250px;
`


export const VideoPlayIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff6d;
    font-size: 50px;
`

export const VideoAuthor = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    font-size: 11px;

    div{
           align-items: center; 
           display: flex;
           gap: 5px;
    }

`