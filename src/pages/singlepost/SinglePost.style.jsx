import { Link } from "react-router-dom";
import styled from "styled-components";

export const SinglePostWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const SinglePostImage = styled.div`
       width: 100%;
`

export const EdDel = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    justify-content: end;
    padding-top: 10px;
    padding-right: 20px;

    span{
        display: flex;
        gap: 3px;
        cursor: pointer;
    }

    span:nth-child(1){
        color: green
    }

    span:nth-child(2){
        color: red
    }
`

export const SinglePostContent = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 50px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

export const SinglePostPost = styled.div`
width: 70%;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`

export const SinglePostShare = styled.div`
width: 100%;
display: flex;
height: 50px;

`

export const ShareText = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
   align-items: center;
    text-align: left;
    justify-content: center;
    padding-right: 20px;
    color: #444444;
`

export const ShareIcon = styled.div`
display: flex;
gap: 10px;
border-left: 1px solid #444444;
padding-left: 20px;
span{
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

span:nth-child(1){
    color: #4661B0;
    border: 1px solid #4661B0;
}

span:nth-child(2){
    color: #F700D1;
    border: 1px solid #F700D1;
}

span:nth-child(3){
    color: #1DA1F2;
    border: 1px solid #1DA1F2;
}

span:nth-child(4){
    color: #FE0000;
    border: 1px solid #FE0000;
}

`
export const PostWriteUp = styled.div`
  width: 100%; 
 line-height: 30px;
 display: flex;
 flex-direction: column;
 gap: 20px;
 margin-top: 40px;

 img{
    width: 100%;
    margin: 20px 0px;
 }
`


export const PostNavigation = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 40px;
`

export const PreviousPost = styled.div`
display: flex;
flex-direction: column;
width: 50%;
text-align: left;
gap: 40px;
`

export const NextPost = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
width: 50%;
text-align: right;
border-left: 1px solid #c1bfbf;
`

export const PostLink = styled(Link)`
color: #828181;
text-decoration: none;
font-size: 14px;

h4{
    color:#111112;
}

&:hover{
    color: #99b899;

    h4{
    color:#99b899;
}
}
`



export const PostCat = styled.div`
width: 100%;
display: flex;
gap: 5px;
`


export const CatLink = styled(Link)`
    padding: 10px;
    background-color: #111112;
    color: white;
    font-size: 12px;
    text-decoration: none;
`


export const AuthorContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 20px;
    font-size: 13px;
    padding-right: 40px;
    line-height: 20px;
    align-items: center;
    color: #828181;
    border: 1px solid #cbcbcb;
`


export const AutorImage = styled.div`
width: 300px;
img{
    width: 100%;
}
`

export const SocialLink = styled(Link)`
  color: #828181;
  font-size: 20px;
`


export const AuthorDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3{
        color: #111112;
    }

    span{
        display: flex;
        gap: 20px;
    }
`


export const SingRecentPost = styled.div`
width: 100%;
display: flex;
gap: 20px;
`

export const RecentPosts = styled.div`
width: 33%;
height: auto;
cursor: pointer;
display: ${({ dsp }) => dsp || "block"};

p{
    font-size: 13px
}
`

export const RecentPostsContents = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    position: relative;
    gap: 20px;
    img{
        width: 100%;
    }
`


export const RecentPostCat = styled.div`
    width: 100px;
    position: absolute;
    bottom: 9px;
    font-size: 12px;

`

export const RecentLinks = styled(Link)`
   background-color: #E46B45 ;
   color: white;
   padding: 10px;
   text-decoration: none;
`


// comment form
export const CommentForm = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 40px;

form{
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
gap: 10px;

textarea{
    width: 100%;
    border: none;
    padding: 10px;
    background-color: #b3b3b33f;

    &:focus{
        outline: none;
    }
}
span{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    input{
        width: 33%;
        padding: 10px;
        background-color: #b3b3b33f;
        border: none;
        &:focus{
        outline: none;
    }
    }
}
}
`



// side bar
export const SinglePostSidebar = styled.div`
    width: 30%;
        @media (max-width: 768px) {
           width: 100%;
           padding: 20px;
  
    }

`

export const RecentComment = styled.div`
width: 100%;
gap: 20px;
display: flex;
font-size:13px;
color: grey;
padding-bottom: 20px;
margin-bottom: 30px;
border-bottom: 1px solid #C5C5C5;
`

export const RecentPostImg = styled.div`
    width: 100px;
    img{
        width: 100%;
   
         }     
        `


export const RecentPostContentWrapper = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`


export const RecentCommentAuthorandDate = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const RecentCommentContentAuthor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    span{
        display: flex;    
        gap: 5px
    }

    h3{
        color: black
    }

`


export const RecentCommentReply = styled.div`
    span{
        display: flex;
    gap: 10px; 
    cursor: pointer;
    }
`


export const RecentCommentImg = styled.div`
img{
    width: 70px;
    height: 70px;
    border-radius: 10px;
}
`

export const RecentCommentContents = styled.div`
    width: 100%;
    margin-top: 20px;
    line-height: 20px;
`