import styled from 'styled-components'


export const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;   
    padding: 40px 0;
      position: relative;     

`

export const ProfileContent = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 40px;
 
    @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const ProfilePost = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
 
    @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileData = styled.div`
position: sticky;
top: 0;
height: 100vh;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
        background-color: #0000ff14;
        padding: 20px;


         
    @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }

    `

export const ProfilePicture = styled.div`
img{
    border-radius: 50%;
    height: 100px;
    width: 100px
}
    
`

export const ProfileCredentials = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;

span{
    width: 100%;
    display: flex;
    gap: 20px;
}
`