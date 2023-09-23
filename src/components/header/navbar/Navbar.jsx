import React from 'react';
import { NavbarWrapper, NavbarContent, NavMenu, MenuItems, Search, MenuLink } from './Navbar.style';
import { Link } from 'react-router-dom'

const Navbar = ({ isOpen, handleIsOpen }) => {
    return (
        <NavbarWrapper isOpen={isOpen} >
            <NavbarContent>
                <NavMenu onClick={handleIsOpen}>
                    <MenuItems>
                        <MenuLink to={'/'}>HOME</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/1'}>BUSINESS</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/2'}>ENTERTAINMENT</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/3'}>FASHION </MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/4'}>LIFESTYLE</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/5'}>SPORT</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/6'}>NEWS</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={'/category/7'}>TRAVEL</MenuLink>
                    </MenuItems>
                </NavMenu>
                <Search>
                </Search>
            </NavbarContent>
        </NavbarWrapper>
    );
}

export default Navbar;



