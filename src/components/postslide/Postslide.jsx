import React from 'react';
import { PostSlide, PostslideWraper } from './Postslide.style';
// requires a loader

import Postcard from '../postcard/Postcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css'


import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock, FaRegComment } from 'react-icons/fa';
import { WrapperDiv } from '../../pages/home/Home.style';


const Postslide = ({ slides }) => {



    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar,]}
            spaceBetween={10}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

        >
            {
                slides && slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Postcard
                            w={"100%"}
                            size={"16px"}
                            text={slide.postCat}
                            content={slide.postTitle}
                            linkColor={"#E46B45"}
                            headingColor={"white"}
                            iconColor={"white"}
                            linkUrl={'/contact'}
                            editIcon={<AiFillEdit />}
                            postAuthor={slide.postAuthor}
                            dateIcon={<FaRegClock />}
                            dateText={slide.postDate}
                            commentIcon={<FaRegComment />}
                            commentCounter={'0'}
                            linkDisplay={'none'}
                            imgUrl={slide.postImg} />
                    </SwiperSlide>
                ))
            }

        </Swiper>



    );
}

export default Postslide;
