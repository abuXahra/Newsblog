import React, { useEffect, useState } from 'react';
import { BannerWrapper, BannerWrapperOverlay, BannerAds } from './Adbanner.style';
import { MarginTop } from '../../../pages/home/Home.style';
import BannerImage from '../../../images/banner-top-2.jpg'
import axios from 'axios';



const Adbanner = (props) => {

    const [adverts, setAdverts] = useState([]);

     //fetch sidebar ads
     const fetchAds = async () => {
        // setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/adverts`)
            setAdverts(res.data.slice(0, 2))
            console.log('.========= ',res.data)
            // setLoader(false)
        } catch (err) {
            console.log(err)
            // setLoader(false)
        }
    }

    useEffect(() => {
        fetchAds();
    }, [])




    return (
        <>
            { adverts.map((advert)=>(
                    advert.adType === 'banner' ?
                   (
                <a href={advert.adsUrl} target="_blank" rel="noopener noreferrer"> 
                   <BannerWrapper bgImg={props.bgImg}>
                        <BannerWrapperOverlay pTB={props.pTB}>
                        
                                <BannerAds bdr={props.bdr}>
                                    <img src={`${process.env.REACT_APP_URL}/images/${advert.photo}`} alt="" srcset="" />
                            </BannerAds>
                        </BannerWrapperOverlay>
                    </BannerWrapper>
                     </a>     
                ):<></> 
            ))   }
        </> );
}

export default Adbanner;
