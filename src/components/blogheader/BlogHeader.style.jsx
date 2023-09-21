import { Link } from 'react-router-dom'
import styled from 'styled-components'


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
  background-image: linear-gradient(180deg, #00000010, #000000ae);
  position: absolute;
  height: 100%;
  width: 100%;
`


export const LeftContent = styled.div`
width: 50%;


@media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`


export const Linkstyled = styled(Link)`
width: "auto";
height: "100%";
`

export const Container = styled.div`
        display: flex;
        position: relative;
        width: 100%;
        flex-direction: column;
        border-left: ${({ cborder }) => cborder || 'none'} ;
        img{
            width: ${({ imgW }) => imgW || "100%"};
            height: ${({ imgH }) => imgH || "auto"};
        }
`

export const ContainerContent = styled.div`
position: absolute;
bottom: 0px;   
padding-left: 20px;
padding-bottom: 20px;

`

export const RightContent = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 2px;
  
   

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }

`


export const RightContentTop = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`

export const RightContentBottom = styled.div`
    display: flex;
    width: 100%;

    gap: 2px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }


`