import { styled } from 'styled-components'


export const TrendingWrapper = styled.div`
height: 160px;
width: 100%;
background-image: url('https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
background-position: center;
background-size: cover;
background-repeat: no;

   
@media (max-width: 768px) {
    height: 150px;

   }
`


export const TrendingWrapperOverlay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #625853d5;
    position: relative;
   
    @media (max-width: 768px) {
height: 100%;
    padding: 20px 0;
   }
`


export const TrendingContent = styled.div`
   width: 90%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
 

   img{
    width: 200px
   }

   
   @media (max-width: 768px) {
        flex-direction: column;

        img{
    width: 150px;
    margin-top:20px
   }
    }
`


export const TrendingDate = styled.div`
    display: flex;
    flex-direction: column;
   justify-content: center;
    text-align: right;
    font-size: 14px;
    div{
        color:white;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

       p{
        color: #03e574;
            margin-right: 5px;
            cursor: pointer;
       }
        span{
        
            border: 2px solid #dddddd;
            display: flex;
            font-size: 13px;
            justify-content: center;
            align-items: center;
            color: #dddddd;
            width: 25px;
            height: 25px;
            cursor: pointer;
        }


}


@media (max-width: 768px) {
    div{
        color:white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 5px;

        span{
     display: flex
    }
        }

}
   
`
export const HamburgeMenu = styled.span`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: absolute;
        top: 30px;
        right: 30px;
        color: white;
        font-size: 30px;
        cursor: pointer;
    
    }
`