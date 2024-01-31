import React, { useEffect, useState } from 'react';
import { BlogHeaderWrapper, CatContent, CatContentContainer, CatTitle, ContentIcons, LeftContent, LeftContentWrapper, Overlay, PostTtile, RightContItem, RightContent, RightContentWrapper } from './BlogHeaderr.style';
import axios from 'axios';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock, FaRegComment } from 'react-icons/fa';
import Content from '../content/Content';
import { useNavigate } from 'react-router-dom';






const BlogHeaderr = () => {

    const navigate = useNavigate()
    const [pcat, setPcat] = useState([])
    const fetchPostCats = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/posts/post/cat`)
            setPcat(res.data)

            console.log('home~~~~~~~~~~~~~~~~~~~~~~' + res.data._id + '~~~~~~~~~~~~~~~~~~~~~~~home')
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchPostCats()
    }, [])

    return (
        <BlogHeaderWrapper>
            <LeftContentWrapper onClick={() => navigate(`/post/${pcat[0]?._id}`)} bg={`${process.env.REACT_APP_URL}/images/${pcat[0]?.photo}`}>
                <Overlay>
                    <CatContentContainer>
                        <CatContent>
                            <Content
                                contentLinkColor={"Orange"}
                                contentLinkText={pcat[0]?.categories[0].title}
                                contentHeader={pcat[0]?.title}
                                headerColor={"white"}
                                IconColor={"white"}
                                linkUrl={`/category/${pcat[0]?.categories[0]._id}`}
                                editIcon={<AiFillEdit />}
                                editText={pcat[0]?.username}
                                dateIcon={<FaRegClock />}
                                dateText={new Date(pcat[0]?.createdAt).toDateString()}
                                commentIcon={<FaRegComment />}
                                commentText={pcat[0]?.comments.length}
                            />
                        </CatContent>

                    </CatContentContainer>
                </Overlay>
            </LeftContentWrapper>

            {/* Right content */}
            <RightContentWrapper>

                {/* First Item */}
                <RightContItem onClick={() => navigate(`/post/${pcat[1]?._id}`)} bg={`${process.env.REACT_APP_URL}/images/${pcat[1]?.photo}`}>
                    <Overlay>
                        <CatContentContainer>
                            <CatContent bt={"20px"} lf={"20px"}>
                                <Content
                                    contentLinkColor={"green"}
                                    contentLinkText={pcat[1]?.categories[0].title}
                                    contentHeader={pcat[1]?.title}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={`/category/${pcat[1]?.categories[0]._id}`}
                                    editIcon={<AiFillEdit />}
                                    editText={pcat[1]?.username}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date(pcat[1]?.createdAt).toDateString()}
                                    commentIcon={<FaRegComment />}
                                    commentText={pcat[1]?.comments.length}
                                    size={"13px"}
                                    fs={"12px"}
                                />
                            </CatContent>
                        </CatContentContainer>
                    </Overlay>
                </RightContItem>

                {/* second Item */}
                <RightContItem onClick={() => navigate(`/post/${pcat[2]?._id}`)} bg={`${process.env.REACT_APP_URL}/images/${pcat[2]?.photo}`}>
                    <Overlay>
                        <CatContentContainer>
                            <CatContent bt={"20px"} lf={"20px"}>
                                <Content
                                    contentLinkColor={"red"}
                                    contentLinkText={pcat[2]?.categories[0].title}
                                    contentHeader={pcat[2]?.title}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={`/category/${pcat[2]?.categories[0]._id}`}
                                    editIcon={<AiFillEdit />}
                                    editText={pcat[2]?.username}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date(pcat[2]?.createdAt).toDateString()}
                                    commentIcon={<FaRegComment />}
                                    commentText={pcat[2]?.comments.length}
                                    size={"13px"}
                                    fs={"12px"}
                                />
                            </CatContent>
                        </CatContentContainer>
                    </Overlay>
                </RightContItem>

                {/* Third Item */}
                <RightContItem onClick={() => navigate(`/post/${pcat[3]?._id}`)} bg={`${process.env.REACT_APP_URL}/images/${pcat[3]?.photo}`}>
                    <Overlay>
                        <CatContentContainer>
                            <CatContent bt={"20px"} lf={"20px"}>
                                <Content
                                    contentLinkColor={"blue"}
                                    contentLinkText={pcat[3]?.categories[0].title}
                                    contentHeader={pcat[3]?.title}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={`/category/${pcat[3]?.categories[0]._id}`}
                                    editIcon={<AiFillEdit />}
                                    editText={pcat[3]?.username}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date(pcat[3]?.createdAt).toDateString()}
                                    commentIcon={<FaRegComment />}
                                    commentText={pcat[3]?.comments.length}
                                    size={"13px"}
                                    fs={"12px"}
                                />
                            </CatContent>
                        </CatContentContainer>
                    </Overlay>
                </RightContItem>

                {/* Fourth Item */}
                <RightContItem onClick={() => navigate(`/post/${pcat[4]?._id}`)} bg={`${process.env.REACT_APP_URL}/images/${pcat[3]?.photo}`}>
                    <Overlay>
                        <CatContentContainer>
                            <CatContent bt={"20px"} lf={"20px"}>
                                <Content
                                    contentLinkColor={"pink"}
                                    contentLinkText={pcat[4]?.categories[0].title}
                                    contentHeader={pcat[4]?.title}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={`/category/${pcat[4]?.categories[0]._id}`}
                                    editIcon={<AiFillEdit />}
                                    editText={pcat[4]?.username}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date(pcat[4]?.createdAt).toDateString()}
                                    commentIcon={<FaRegComment />}
                                    commentText={pcat[4]?.comments.length}
                                    size={"13px"}
                                    fs={"12px"}
                                />
                            </CatContent>
                        </CatContentContainer>
                    </Overlay>
                </RightContItem>
            </RightContentWrapper>
        </BlogHeaderWrapper>
    );
}

export default BlogHeaderr;

