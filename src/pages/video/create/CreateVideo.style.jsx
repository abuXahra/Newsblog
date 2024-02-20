
import styled from "styled-components"
import { Link } from "react-router-dom";

export const VideContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap:  wrap;
    justify-content: space-between;
    gap: 20px;

`

export const Video = styled.div`
width: 32%;
height: auto; 
display: "flex";
flex-direction: column;
gap: 100px;
position: relative;
cursor: pointer;



@media (max-width: 786px) {
        width: 100%;
    }
`


export const LinkStyle = styled(Link)`
    width: auto;
`


export const VideoCoverv = styled.div`
background-image: url(${({ bg }) => bg});
background-color: #808080ba;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
width: 100%;
height: 250px;
margin-bottom: 10px;
`

export const VideoOverlayv = styled.div`
background-color: #00000040;
  position: relative;
  height: 250px;
  width: 100%;
`

export const VideoPlayIconv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff6d;
    font-size: 50px;
`
export const VideoTitlev = styled.span`
    font-size: 14px;
    font-weight: bold;
    padding-top: 20px;
`
export const VideoAuthorv = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    font-size: 11px;
    margin: 5px 0;

    div{
           align-items: center; 
           display: flex;
           gap: 5px;
    }

`

export const EdDelv = styled.div`
background-color: white;
position: absolute; 
bottom: 5px;
left: 5px;
padding: 10px;
border-radius: 5px;
display: flex;
gap: 10px;
z-index: 100;

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