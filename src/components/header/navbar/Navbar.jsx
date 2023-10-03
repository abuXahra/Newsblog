import React, { useState } from 'react';
import { NavbarWrapper, NavbarContent, NavMenu, MenuItems, Search, MenuLink, SearchContainer } from './Navbar.style';
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ isOpen, handleIsOpen }) => {
    const [sdisp, setSdisp] = useState(false)

    const dispHandler = () => {
        if (sdisp === false) {
            setSdisp(true)
        } else {
            setSdisp(false)
        }


    }

    const user = false;
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
                    <MenuItems>
                        {user ? <MenuLink to={'/write'}>WRITE</MenuLink> : <MenuLink to={'/login'}>LOGIN</MenuLink>}
                    </MenuItems>
                    <MenuItems>
                        {user ? <MenuLink to={'/profile'}>PROFILE</MenuLink> : <MenuLink to={'/register'}>REGISTER</MenuLink>}
                    </MenuItems>
                </NavMenu>
                <SearchContainer>
                    {
                        sdisp && <input type="text" name="" id="" placeholder='search' />
                    }
                    <span onClick={dispHandler}><FaSearch /></span>
                </SearchContainer>


            </NavbarContent>
        </NavbarWrapper>
    );
}

export default Navbar;



