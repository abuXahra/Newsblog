import React, { useEffect, useState } from 'react'
import { FooterAbout, FooterContent, FooterCopyright, FooterCopyrightContent, FooterRecentPost, FooterWrapper, PostLink, SocialIcons } from './Footer.style'
import logo from '../../images/newsstand-logo-2.png'
import { MarginTop } from '../../pages/home/Home.style'
import { FaArrowRight, FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import Title from '../section-title/Title'
import { POSTS } from '../../data/Posts'
import axios from 'axios'
import { InputStyled, SubscibeWrapper } from '../sidebar/Sidebar.style'
import Button from '../clicks/button/Button'

function Footer() {

    const [posts, setPosts] = useState(POSTS)

    const fetchPost = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_URL + "/api/posts")
            setPosts(res.data.slice(0, 5))

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <FooterWrapper>
            <FooterContent>
                <FooterAbout>
                    <img src={logo} alt="" srcset="" />
                    <MarginTop />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque.</p>

                    <MarginTop />
                    <SocialIcons>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaPinterest />
                        <FaGooglePlusG />
                    </SocialIcons>
                </FooterAbout>
                <FooterRecentPost>
                    <Title title={"RECENT POST"} hrLB={"0px"} tColor={"#e1e1e1"} />
                    <ul>
                        {posts && posts.map((post) => (
                            <li key={post._id}><FaArrowRight /> <PostLink to={`/post/${post._id}`}>{post.title}</PostLink> </li>
                        ))}
                    </ul>
                </FooterRecentPost>
                <FooterRecentPost>
                    {/* SUBSCRIPTION */}
                    <SubscibeWrapper>
                        <Title tColor={"white"} title={'SUBSCRIBE'} mb={"8px"} hrCl={"white"} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper </p>
                        <form action="">

                            <InputStyled>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </InputStyled>
                            <div>
                                <Button btnColor={"black"} btnText={"SUBSCRIBE"} /></div>

                        </form>
                    </SubscibeWrapper>
                </FooterRecentPost>
            </FooterContent>
            <FooterCopyright>
                <FooterCopyrightContent>
                    <span>
                        <div>
                            <p><PostLink to={'/'}>Home</PostLink></p>
                            <p><PostLink to={'/'}>Authors</PostLink></p>
                            <p><PostLink to={'/'}>About</PostLink></p>
                            <p><PostLink to={'/'}>About</PostLink></p>
                            <p><PostLink to={'/'}>Contact</PostLink></p>    
                            <p><PostLink to={'/login'}>Staff Login</PostLink></p>
                        </div>
                    </span>
                    <span>Copyright 2023 Newsstand, All Right Reserved</span>
                </FooterCopyrightContent>
            </FooterCopyright>

        </FooterWrapper >
    )
}

export default Footer