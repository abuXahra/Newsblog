import React from 'react';
import { BannerWrapper, BannerWrapperOverlay, BannerAds } from './Adbanner.style';
import { MarginTop } from '../../../pages/home/Home.style';
import BannerImage from '../../../images/banner-top-2.jpg'

const Adbanner = (props) => {
    return (
        <BannerWrapper bgImg={props.bgImg}>
            <BannerWrapperOverlay pTB={props.pTB}>
                <BannerAds bdr={props.bdr}>
                    <img src={BannerImage} alt="" srcset="" />
                </BannerAds>
            </BannerWrapperOverlay>
        </BannerWrapper>
    );
}

export default Adbanner;
