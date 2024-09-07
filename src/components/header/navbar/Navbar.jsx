import React, { useContext, useEffect, useState } from 'react';
import { NavbarWrapper, NavbarContent, NavMenu, MenuItems, Search, MenuLink, SearchContainer } from './Navbar.style';
import { Link, useLocation } from 'react-router-dom'
import { FaDAndD, FaDAndDBeyond, FaSearch } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = ({ isOpen, handleIsOpen, }) => {
    const [sdisp, setSdisp] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext)
    const [prompt, setPrompt] = useState('')
    const path = useLocation().pathname
    const [searchIcon, setSearchIcon] = useState(< FaSearch />)
    const [category, setCategory] = useState([])

    console.log(prompt)
    const dispHandler = () => {
        prompt ? navigate("?search=" + prompt) : navigate("/")

    }


    //  3:48:31

    // Logout function
    const handleLogout = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_URL + '/api/auth/logout', { withCredentials: true })
            setUser(null)
            navigate('/login')

        } catch (err) {
            console.log(err)
        }
    }


    const fetchCategory = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/`)
            console.log('=========================== categoriess==================================\n');
            console.log(res.data);
            setCategory(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [])


    return (
    <>
   { category &&
   

    <NavbarWrapper isOpen={isOpen} >
            <NavbarContent>
                <NavMenu onClick={handleIsOpen}>
                    <MenuItems>
                        <MenuLink to={`/`}>HOME</MenuLink>
                    </MenuItems>
                    
                    
                       { category?.map((cat) => (
                            <MenuItems key={cat._id}>
                                <MenuLink to={`/category/${cat._id}`}><span style={{ textTransform: 'uppercase' }}>{cat.title}</span></MenuLink>
                            </MenuItems>
                        )) }

                   

                    <MenuItems>
                        <MenuLink to={`/video-post`}>VIDEO</MenuLink>
                    </MenuItems>
                    <MenuItems>
                        {user ? <MenuLink to={'/new'}>WRITE</MenuLink> : <MenuLink to={'/login'}>LOGIN</MenuLink>}
                    </MenuItems>
                    <MenuItems>
                        {user ? <MenuLink to={`/profile/${user._id}`}>PROFILE</MenuLink> : <MenuLink to={'/register'}>REGISTER</MenuLink>}
                    </MenuItems>
                    <MenuItems>
                        {user && <span onClick={handleLogout} style={{ cursor: "pointer", color: "white" }}><AiOutlineLogout /></span>}
                    </MenuItems>

                </NavMenu>
                {path === '/' &&
                    <SearchContainer>
                        <input onChange={(e) => { setPrompt(e.target.value) }} type="text" name="" id="" placeholder='search' />
                        <span onClick={dispHandler}>{searchIcon}</span>
                    </SearchContainer>
                }
            </NavbarContent>
        </NavbarWrapper>    
    
            }</>
       
    );
}

export default Navbar;

// {
//     sdisp && <input onChange={(e) => { setPrompt(e.target.value) }} type="text" name="" id="" placeholder='search' />
// }
// {<span onMouseOver={dispHandler} onClick={() => { prompt ? navigate("?search=" + prompt) : navigate("/") }}>< FaSearch /></span>}*/

