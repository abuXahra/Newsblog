import React, { useContext, useState } from 'react';
import { NavbarWrapper, NavbarContent, NavMenu, MenuItems, Search, MenuLink, SearchContainer } from './Navbar.style';
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';
import { URL } from '../../../url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = ({ isOpen, handleIsOpen }) => {
    const [sdisp, setSdisp] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext)
    const [prompt, setPrompt] = useState('')

    console.log(prompt)
    const dispHandler = () => {
        if (sdisp === false) {
            setSdisp(true)
        } else {
            setSdisp(false)
        }


    }


    //  3:48:31

    // Logout function
    const handleLogout = async () => {
        try {
            const res = await axios.get(URL + '/api/auth/logout', { withCredentials: true })
            setUser(null)
            navigate('/login')

        } catch (err) {
            console.log(err)
        }
    }

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
                        {user ? <MenuLink to={'/profile/jhgjgjj'}>PROFILE</MenuLink> : <MenuLink to={'/register'}>REGISTER</MenuLink>}
                    </MenuItems>
                    <MenuItems>
                        {user && <span onClick={handleLogout} style={{ cursor: "pointer", color: "white" }}><AiOutlineLogout /></span>}
                    </MenuItems>

                </NavMenu>
                <SearchContainer>
                    {
                        sdisp && <input onChange={(e) => { setPrompt(e.target.value) }} type="text" name="" id="" placeholder='search' />
                    }
                    {<span onMouseOver={dispHandler} onClick={() => { prompt ? navigate("?search=" + prompt) : navigate("/") }}>< FaSearch /></span>}
                    {/* <input onChange={(e) => { setPrompt(e.target.value) }} value={prompt} type="text" name="" id="" placeholder='search' />
                    <span onClick={}>< FaSearch /></span> */}
                </SearchContainer>


            </NavbarContent>
        </NavbarWrapper>
    );
}

export default Navbar;


