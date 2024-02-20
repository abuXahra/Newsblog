import styled from 'styled-components'


export const PostSlide = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
`

export const PostslideWraper = styled.div`
    width: auto;
    height: 300px;
    margin-bottom: 100px;

    
    @media (max-width: 768px) {
      margin-top: 100px;
      margin-bottom: 100px;
      height: 100px
    }
`