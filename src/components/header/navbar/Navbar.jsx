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
                        <MenuLink to={''}>BUSINESS</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={''}>ENTERTAINMENT</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={''}>FASHION </MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={''}>LIFESTYLE</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={''}>SPORT</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={''}>NEWS</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        <MenuLink to={''}>TRAVEL</MenuLink>
                    </MenuItems>
                </NavMenu>
                <Search>
                </Search>
            </NavbarContent>
        </NavbarWrapper>
    );
}

export default Navbar;



