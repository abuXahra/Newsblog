
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: #282828;
    display: flex;
    justify-content: center;

    
    @media (max-width:768px) {
        height: auto;
        display: ${({ isOpen }) => isOpen ? "auto" : "none"};
        transition: ease-in-out;
    }
  
`
export const NavbarContent = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: -41px;

    
    @media (max-width:768px) {
       flex-direction: column;
       padding: 30px 0;
    }
`

export const NavMenu = styled.ul`
margin-left: -41px;
list-style: none;
display: flex;
justify-content: flex-start;
gap: 20px;

@media (max-width:768px) {
       flex-direction: column;
       text-align: center;
       margin-bottom: 30px;
    }

`

export const MenuItems = styled.li`
    color: #d3d0d0;
    font-size: 12px;

`
export const MenuLink = styled(Link)`
      color: #d3d0d0;
      text-decoration: none;

      &:hover{
        color: #d3d0d0;;
      }
      &:active{
        color: #d3d0d0;;
      }

`



export const SearchContainer = styled.div`
 display: flex;
 //flex-direction: column;
 position: relative;
 align-items: center;
 gap: 10px;


 input{
    padding: 10px 20px;
    background-color: #00000097;
    color: white;
    border: none;
    border-radius: 50px;
    transition: width 10s ease-in-out;
    width:200px;
    margin-left: 20px;

    &:focus{
        outline: none;
    }


 }

 span{
    color: white;
    cursor: pointer;
 }
`