import styled from "styled-components"

export const ContentWrapper = styled.div`
    width: ${({ w }) => w || '100%'} ;
    display: flex;
    flex-direction: column;

`

export const ContentHeader = styled.div`
    margin-right: 40px;
    margin-top: 15px;
    margin-bottom: 5px;
    /* line-height: 20px; */
    font-size: ${({ size }) => size || "25px"};
    font-weight: bold;
    color: ${({ headerColor }) => headerColor || "white"};

        
    @media (max-width: 768px) {
        font-size: ${({ smfs }) => smfs || "25px"};
    }
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


@media (max-width: 768px) {
        span{
            display: ${({ dps }) => dps || "flex"};
        }
        span:nth-child(3){
    display: ${({ dps }) => dps || "flex"} ;
}
    }


`