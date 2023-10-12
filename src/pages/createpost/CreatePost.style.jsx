import styled from "styled-components";

export const CreatePostWrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 40px 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction:column;
    gap: 20px;
`

export const CreatePostForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;

input{
border-radius: 2px;
padding: 10px;
border: none;
background-color: #80808036;

&:focus{
    outline: none;
}
}


span{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    input:nth-child(1){
        flex: 6;
    }
    
label{
    background-color: #80808036; 
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    flex: 1;
    color: grey;
}

}



textarea{
    width: 100%;
    border-radius: 2px;
padding: 10px;
border: none;
background-color: #80808036;


&:focus{
    outline: none;
}
}




`

export const PostPicture = styled.input`
display: none;
background-color: #80808036;
`


export const CreatePostCat = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px 5px;
color: grey;
background-color: #80808036;
`


export const CreateCatOptions = styled.div`
width: 100%;
display: flex;
gap: 20px;

input{
    width: 20px;
    height: 20px;
}
`


export const CreateCatOptionsWrapper = styled.div`
width: 100%;
 display: flex;
 gap: 20px;

 @media (max-width:786px) {
    flex-direction: column;
 }
`