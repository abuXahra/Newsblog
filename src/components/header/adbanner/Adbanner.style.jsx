import { styled } from "styled-components";



export const BannerWrapper = styled.div`
height: auto;
width: 100%;
background-image: ${({ bgImg }) => bgImg || "url('https://files.123freevectors.com/wp-content/original/131382-abstract-grey-and-white-polygon-pattern-background-illustration.jpg')"};
background-position: center;
background-size: cover;
background-repeat: no;
`


export const BannerWrapperOverlay = styled.div`
    padding: ${({ pTB }) => pTB || "20px"};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000006a;
`

export const BannerAds = styled.div`
    border: ${({ bdr }) => bdr || "2px"}  solid white;
    display: flex;
    justify-content: center;
    align-items: center;
   


    @media (max-width:768px) {
        width: 90%;
          img{
        width: 100%;
    }  
    }


`