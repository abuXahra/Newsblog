import React, { useEffect, useState } from 'react';
import { TopbarContent, TopbarWrapper, TopbarSocial, TopbarContacts, TopbarMaquee, MarqueeData, IconDot } from './Topbar.style';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import axios from 'axios';
import { PostLink } from '../../footer/Footer.style';
import { FaArrowRight, FaDotCircle } from 'react-icons/fa';


const Topbar = () => {

    const [posts, setPosts] = useState([])

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
        <TopbarWrapper>
            <TopbarContent>
                <TopbarContacts>
                    <span><BiPhoneCall /></span> +23408134701458
                    <span><AiOutlineMail /></span> +23408134701458
                </TopbarContacts>
                <TopbarMaquee>
                    <marquee behavior="" direction="left">
                        <MarqueeData>
                            {posts && posts.map((post) => (
                                <li key={post._id}><PostLink linkColor="yellow" to={`/post/${post._id}`}><IconDot/> {post.title}</PostLink> </li>
                            ))}
                        </MarqueeData> 
                    </marquee>
                </TopbarMaquee>


                <TopbarSocial>
                    <BiLogoFacebook />
                    <BiLogoInstagram />
                    <BiLogoTwitter />
                    <BiLogoLinkedin />
                </TopbarSocial>
            </TopbarContent>
        </TopbarWrapper>
    );
}

export default Topbar;
