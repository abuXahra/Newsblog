import React, { useState } from 'react'
import { FooterAbout, FooterContent, FooterCopyright, FooterRecentPost, FooterWrapper, PostLink, SocialIcons } from './Footer.style'
import logo from '../../images/newsstand-logo-2.png'
import { MarginTop } from '../../pages/home/Home.style'
import { FaArrowRight, FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import Title from '../section-title/Title'
import { POSTS } from '../../data/Posts'

function Footer() {

    const [posts, setPosts] = useState(POSTS)
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
                        {posts && posts.map((post, index) => (
                            <li key={index}><FaArrowRight /> <PostLink to={'/'}>{post.postTitle}</PostLink> </li>
                        ))}
                    </ul>
                </FooterRecentPost>
            </FooterContent>
            <FooterCopyright>
                <div>
                    <span>
                        <ul>
                            <li><PostLink to={'/'}>Home</PostLink></li>
                            <li><PostLink to={'/'}>Authors</PostLink></li>
                            <li><PostLink to={'/'}>About</PostLink></li>
                            <li><PostLink to={'/'}>About</PostLink></li>
                            <li>Contact</li>
                        </ul>
                    </span>
                    <span>Copyright 2023 Newsstand, All Right Reserved</span>
                </div>
            </FooterCopyright>

        </FooterWrapper >
    )
}

export default Footer