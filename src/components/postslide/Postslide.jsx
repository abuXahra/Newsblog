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
import { CatContent, CatContentContainer, Overlay } from '../../components/blogheader/BlogHeaderr.style';
import Content from '../content/Content';
import { useNavigate } from 'react-router-dom';
import Title from '../section-title/Title';


const Postslide = ({ slides }) => {

    const navigate = useNavigate();


    return (<PostslideWraper>

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
                slides && slides.map((post, index) => (
                    <SwiperSlide key={index}>

                        <WrapperDiv onClick={() => navigate(`/post/${post._id}`)}
                            bg={`${process.env.REACT_APP_URL}/images/${post.photo}`}
                            key={index}
                            w={"100%"}
                            ht={"200px"}
                        >
                            <Overlay>
                                <CatContentContainer>
                                    <CatContent lf={"20px"} bt={"20px"}>
                                        <Content
                                            contentLinkColor={""}
                                            contentLinkText={''}
                                            linkDisplay={"none"}
                                            contentHeader={post.title}
                                            headerColor={"white"}
                                            IconColor={"white"}
                                            linkUrl={''}
                                            editIcon={<AiFillEdit />}
                                            editText={post?.username}
                                            dateIcon={<FaRegClock />}
                                            dateText={new Date(post?.createdAt).toDateString()}
                                            commentIcon={<FaRegComment />}
                                            commentText={post?.comments.length}
                                            link
                                            smfs={'12px'}
                                            dps={"none"}
                                        />
                                    </CatContent>

                                </CatContentContainer>
                            </Overlay>
                        </WrapperDiv>

                    </SwiperSlide>
                ))
            }

        </Swiper>
    </PostslideWraper>);
}

export default Postslide;
