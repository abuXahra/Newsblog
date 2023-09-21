import React from 'react';
import { TopbarContent, TopbarWrapper, TopbarSocial, TopbarContacts, TopbarMaquee } from './Topbar.style';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'

const Topbar = () => {
    return (
        <TopbarWrapper>
            <TopbarContent>
                <TopbarContacts>
                    <span><BiPhoneCall /></span> +23408134701458
                    <span><AiOutlineMail /></span> +23408134701458
                </TopbarContacts>
                <TopbarMaquee>
                    <marquee behavior="" direction="left">sdsfdxcs</marquee>
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
