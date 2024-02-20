import styled from "styled-components";



export const BlogHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    position: relative;
    gap: 2px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

export const Overlay = styled.div`
  background-image: linear-gradient(180deg, #00000019, #000000df);
  position: relative;
  height: 100%;
  width: 100%;
`

export const LeftContentWrapper = styled.div`
background-image: url(${({ bg }) => bg || "none"});
cursor: pointer;
background-position: center;
background-size: cover;
width: 50%;
height: 80vh;
background-color: grey;


@media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`




export const RightContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    gap: 2px;
    height: 80vh;
    background-color: aliceblue;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }

`


export const RightContItem = styled.div`
    background-image: url(${({ bg }) => bg || "none"});
    cursor: pointer;
    background-position: center;
    background-size: cover;
    width: 49.8%;
    height: 49.8%;
    color: white;
    background-color: grey;
`


// CAT POST CONTENT
export const CatContentContainer = styled.div`
    position: relative;
    color: white;
    width: 100%;
    height: 100%;
`

export const CatContent = styled.div`
     position: absolute;
    bottom: ${({ bt }) => bt || "100px"} ;
    left:  ${({ lf }) => lf || "100px"}; 
    display: flex;
    flex-direction: column;
    gap:  10px;
`

export const CatTitle = styled.span`
padding: 10px;
color: white;
background-color: ${({ bg }) => bg || 'orange'};
margin-bottom: 10px;
`
export const PostTtile = styled.h2`
 
`


export const ContentIcons = styled.div`
display: flex;
width: 100%;
gap: 20px;
font-size: 10px;
color: ${({ IconColor }) => IconColor || "white"};

span{
    display: flex;
    align-items: center;
    p{
        margin-left: 8px;
        color: ${({ IconTextColor }) => IconTextColor || "grey"};
    }
}


span:nth-child(3){
    display: ${({ editIconDisplay }) => editIconDisplay || "flex"} ;
}
`




