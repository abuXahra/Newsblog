
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
gap: 30px;

@media (max-width:768px) {
       flex-direction: column;
       text-align: center;
       margin-bottom: 30px;
    }

`

export const MenuItems = styled.li`
    color: #d3d0d0;
    font-size: 14px;

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



export const Search = styled.input`
`