import React, { useEffect, useState } from 'react';
import { Ads, CatWrapper, CategorList, CategoryListItem, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, InputStyled, MarginTop, PostIconStyled, PostLink, PostTitleStyled, RecentPost, RecentPostContent, RecentPostImg, RecentPostWrapper, SidebarWrapper, SocialListItem, SocialMedia, SubscibeWrapper } from './Sidebar.style';
import Title from '../section-title/Title';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import Button from '../clicks/button/Button';
import { SOCIALMEDIA } from '../../data/SocialMedias'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Sidebar = ({ fxTp, catId }) => {

    const [posts, setPosts] = useState('')
    const [socialMedia, setSocialMedia] = useState(SOCIALMEDIA)
    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    const [postLength, setPostLength] = useState()


    // fetch recent posts
    const fetchRcentPost = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_URL + "/api/posts")
            setPosts(res.data.slice(0, 6))
        } catch (err) {
            console.log(err)
        }
    }




    // fetch categories
    const fetchCategory = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_URL + "/api/categories")
            setCategory(res.data)

            console.log("CAT ITEM ", res.data, "CAT ITEM")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchRcentPost()
        fetchCategory()
    }, [])







    return (
        <SidebarWrapper>
            {/* Recent POSTS */}
            <RecentPostWrapper>
                <Title title={'Recent Post'} />
                {
                    posts && posts.map((post, index) => (
                        <PostLink to={`/post/${post._id}`} key={index} >
                            <RecentPost pdtop={post.id === 1 && "0"} lastItemBorder={post.id === posts.length && "0"}>
                                <RecentPostImg>
                                    <img src={`${process.env.REACT_APP_URL}/images/${post.photo}`} alt="" />
                                </RecentPostImg>

                                <RecentPostContent>
                                    <PostTitleStyled>{post.title}</PostTitleStyled>
                                    <PostIconStyled>
                                        <EditStyled>
                                            <EditIconStyled>
                                                {<AiFillEdit />}
                                            </EditIconStyled>
                                            <EditTitledStyled>
                                                {post.username}
                                            </EditTitledStyled>
                                        </EditStyled>

                                        <DateStyled>
                                            <DateIconStyled>
                                                {<FaRegClock />}
                                            </DateIconStyled>
                                            <DateTitledStyled>
                                                {post.createdAt}
                                            </DateTitledStyled>
                                        </DateStyled>
                                    </PostIconStyled>
                                </RecentPostContent>
                            </RecentPost>
                        </PostLink>
                    ))
                }

                {/* POST CATEGORY */}
                <MarginTop />
                <Title title={'CATEGORY'} mb={"-10px"} />
                <CategorList>
                    {
                        category && category.map((cat, index) => (
                            <CategoryListItem disp={catId === cat._id ? "none" : "flex"} onClick={() => (navigate(`/category/${cat._id}`))} bcolor={cat.color} pdtop={index === 0 && "0"} lastItemBorder={cat.id === category.length && "0"}>
                                <p style={{ textTransform: "uppercase" }}> {cat.title}</p>
                                <div>
                                    {cat.posts?.length}
                                </div>

                            </CategoryListItem>
                        ))
                    }
                </CategorList>
                <MarginTop />

                {/* ADS */}
                <CatWrapper flDir={"column"} gp={"0px"} fxTp={fxTp}>
                    <Ads>
                        {/* <img src={posts[0].postImg} alt="" /> */}
                    </Ads>
                    <MarginTop />


                    {/* SOCIAL MEDIA HANDLES */}
                    <SocialMedia>
                        <Title title={'SOCIAL MEDIA'} mb={"8px"} />
                        {
                            socialMedia && socialMedia.map((social, index) => (
                                <SocialListItem bcolor={social.color} pdtop={index === 0 && "0"} lastItemBorder={social.id === socialMedia.length && "0"}>
                                    <span>
                                        {social.icon} <b> {social.catCounter} </b><h3>{social.title}</h3>
                                    </span>
                                    <div>
                                        <PostLink linkColor={social.color} to={"/contact"}>{social.action}</PostLink>
                                    </div>
                                </SocialListItem>
                            ))
                        }
                    </SocialMedia>
                    {/* <MarginTop />

                    {/* SUBSCRIPTION */}
                    {/* <SubscibeWrapper>
                        <Title title={'SUBSCRIBE'} mb={"8px"} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper </p>
                        <form action="">

                            <InputStyled>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </InputStyled>
                            <div>
                                <Button btnColor={"#444444"} btnText={"SUBSCRIBE"} /></div>

                        </form>
                    </SubscibeWrapper> */}
                </CatWrapper>

                <MarginTop />

            </RecentPostWrapper>
        </SidebarWrapper>

    );
}

export default Sidebar;
