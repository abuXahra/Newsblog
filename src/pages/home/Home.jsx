import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import { HomePostSlideSection, HomeTopSection, HomeTopSectionContent, HomeTopSectionLeft, HomeTopSectionRight, HomeTopSectionRightContent, HomeWrapper, PostCategory, RecentPostWrapper, RecentWrapper, WrapperDiv, RecentPost, RecentPostImg, RecentPostContent, PostTitleStyled, PostIconStyled, EditStyled, EditIconStyled, EditTitledStyled, AuthorStyled, AuthorIconStyled, AuthorTitledStyled, DateStyled, DateIconStyled, DateTitledStyled, PostLink, EnternCat, EnterRecent, EnterCat, EntertainCatWrapper, CatWrapper, CategorList, CategoryListItem, MarginTop, FashionCat, FashionCatImag, FashionCatText, Ads, SocialMedia, SocialListItem, Subscibe, SubscibeWrapper, InputStyled } from './Home.style';
import BlogHeader from '../../components/blogheader/BlogHeader';
import { Container } from '../../components/blogheader/BlogHeader.style';
import Postcard from '../../components/postcard/Postcard';
import { AiFillEdit } from 'react-icons/ai';
import { FaFacebookF, FaRegClock, FaRegComment } from 'react-icons/fa';
import { POSTS } from '../../data/Posts';
import { ENTERNAINMENT } from '../../data/Posts';
import { TECH } from '../../data/Posts'
import { BUSINESS } from '../../data/Posts'
import { CATEGORY } from '../../data/Category'
import { FASHION } from '../../data/Posts'
import { SOCIALMEDIA } from '../../data/SocialMedias'
import { VIDEOPOSTS } from '../../data/VideoPost';
import Content from '../../components/content/Content';
import Postslide from '../../components/postslide/Postslide';
import single from '../../images/single.jpg';
import Title from '../../components/section-title/Title';
import Adbanner from '../../components/header/adbanner/Adbanner';
import Sidebar from '../../components/sidebar/Sidebar';
import axios, { Axios } from 'axios';
// import { URL, IF } from '../../url';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { UserContext } from '../../components/context/UserContext';


// 3:34:51
// bvv


const Home = () => {
    const [posts, setPosts] = useState(POSTS)
    const [myposts, setMyPosts] = useState([])
    const [entertainment, setEntertainment] = useState(ENTERNAINMENT)
    const [tech, setTech] = useState(TECH)
    const [business, setBusiness] = useState(BUSINESS)
    const [fashion, setFashion] = useState(FASHION)
    const [socialMedia, setSocialMedia] = useState(SOCIALMEDIA)
    const [slides, setSlide] = useState(POSTS)
    const [category, setCategory] = useState(CATEGORY)
    const [videoPosts, setVideoPosts] = useState(VIDEOPOSTS)

    const { search } = useLocation(); //for search
    const [noResults, setNoResults] = useState(false)

    const [loader, setLoader] = useState(false) //Loader

    const { user } = useContext(UserContext);
    console.log(user)

    const singlePost = {
        postImg: single,
        postCat: "Sport News",
        postTitle: "Single Ranking Vertical Style",
        postAuthor: "John Maxwell",
        postDate: new Date().toDateString()
    }



    const fetchPost = async () => {

        setLoader(true)

        try {
            const res = await axios.get(process.env.REACT_APP_URL + "/api/posts" + search)
            setMyPosts(res.data)
            if (res.data.length === 0) { //if search result not dund
                setNoResults(true)
            } else {
                setNoResults(false)
            }
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }


    useEffect(() => {
        fetchPost()
    }, [search])




    return (
        <HomeWrapper>
            {/* Homepage Header-section */}
            <BlogHeader />
            cxvvxvvvvvvvvvvxvvvv xvxvxvxv xvxvvxvv xvxvxvx xvxvxvxv xvxvxv vxvxvx
            {/* Homepage Top-section */}
            <HomeTopSection>
                {/* Left Content */}
                <HomeTopSectionLeft>
                    {/* <Postcard
                        w={"100%"}
                        text={last.categories[0]}
                        content={last.title}
                        linkColor={"#E46B45"}
                        headingColor={"white"}
                        iconColor={"white"}
                        linkUrl={'/posts/1'}
                        editIcon={<AiFillEdit />}
                        postAuthor={last.username}
                        dateIcon={<FaRegClock />}
                        dateText={new Date(last.createdAt).toDateString()}
                        commentIcon={<FaRegComment />}
                        commentCounter={'0'}
                        linkDisplay={'inline-block'}
                        imgUrl={last.photo} /> */}

                    <HomeTopSectionContent>
                        {loader ? <Loader /> :
                            !noResults ? (myposts && myposts.map((post, index) => (
                                <WrapperDiv key={index}>
                                    <Postcard
                                        postUrl={`/post/${post._id}`}
                                        w={"100%"}
                                        size={'18px'}
                                        text={post.categories}
                                        content={post.title}
                                        linkColor={"#E46B45"}
                                        headingColor={"white"}
                                        iconColor={"#ffffffc1"}
                                        IconTextColor={"#ffffffc1"}
                                        linkUrl={''}
                                        editIcon={<AiFillEdit />}
                                        postAuthor={post.username}
                                        dateIcon={<FaRegClock />}
                                        dateText={new Date(post.createdAt).toDateString()}
                                        commentIcon={<FaRegComment />}
                                        commentCounter={'0'}
                                        linkDisplay={'none'}
                                        imgUrl={`${process.env.REACT_APP_URL}/images/${post.photo}`} />
                                </WrapperDiv>
                            ))) : (<div style={{ display: "flex", width: "100%", textAlign: "center", marginTop: "100px", justifyContent: "center" }}>No Post Found</div>)}
                    </HomeTopSectionContent>
                </HomeTopSectionLeft>

                {/* right content */}
                <HomeTopSectionRight>
                    <h3>VIDEO POSTS</h3>
                    <hr />
                    <HomeTopSectionRightContent>
                        {videoPosts && videoPosts.map((post, index) => (

                            <WrapperDiv key={index} w={'100%'}>
                                <Postcard
                                    w={"100%"}
                                    size={'18px'}
                                    linkUrl={'/contact'}
                                    imgUrl={post.postImg}
                                    linkDisplay={'none'}
                                />

                                <Content
                                    contentHeader={post.postTitle}
                                    size={'14px'}
                                    headerColor={"grey"}
                                    IconColor={'grey'}
                                    editIcon={<AiFillEdit />}
                                    editText={post.postAuthor}
                                    dateIcon={<FaRegClock />}
                                    dateText={post.postDate}
                                    linkDisplay={'none'} />
                            </WrapperDiv>
                        ))}
                    </HomeTopSectionRightContent>
                </HomeTopSectionRight>
            </HomeTopSection>

            {/* Post Slide */}
            <HomePostSlideSection>
                <Postslide slides={slides} />
            </HomePostSlideSection>


            {/* RECENT POST & POST CATEGORY SECTION */}
            <RecentWrapper>
                {/* HomePage Sidebar */}
                <RecentPostWrapper>
                    <Title title={'Recent Post'} />

                    {
                        posts && posts.map((post, index) => (
                            <PostLink to='/contact' key={index} >
                                <RecentPost pdtop={post.id === 1 && "0"} lastItemBorder={post.id === posts.length && "0"}>
                                    <RecentPostImg>
                                        <img src={post.postImg} alt="" />
                                    </RecentPostImg>

                                    <RecentPostContent>
                                        <PostTitleStyled>Magna Dapibus Sollicitudin Consectetur Lorem</PostTitleStyled>
                                        <PostIconStyled>
                                            <EditStyled>
                                                <EditIconStyled>
                                                    {<AiFillEdit />}
                                                </EditIconStyled>
                                                <EditTitledStyled>
                                                    {post.postAuthor}
                                                </EditTitledStyled>
                                            </EditStyled>

                                            <DateStyled>
                                                <DateIconStyled>
                                                    {<FaRegClock />}
                                                </DateIconStyled>
                                                <DateTitledStyled>
                                                    {post.postDate}
                                                </DateTitledStyled>
                                            </DateStyled>
                                        </PostIconStyled>
                                    </RecentPostContent>
                                </RecentPost>
                            </PostLink>
                        ))
                    }
                    <MarginTop />
                    <Title title={'CATEGORY'} mb={"-10px"} />
                    <CategorList>
                        {
                            category && category.map((cat, index) => (
                                <CategoryListItem bcolor={cat.color} pdtop={index === 0 && "0"} lastItemBorder={cat.id === category.length && "0"}>
                                    <p> {cat.title}</p>
                                    <div>
                                        {cat.catCounter}
                                    </div>

                                </CategoryListItem>
                            ))
                        }
                    </CategorList>
                    <MarginTop />

                    {/* ADS, SOCIAL MEDI */}
                    <CatWrapper flDir={"column"} gp={"0px"} fxTp={'0'}>
                        <Ads>
                            <img src={posts[0].postImg} alt="" />
                        </Ads>
                        <MarginTop />

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

                        <MarginTop />

                        <SubscibeWrapper>
                            <Title title={'SUBSCRIBE'} mb={"8px"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper </p>
                            <form action="">

                                <InputStyled>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" />
                                </InputStyled>
                                <div><Button btnColor={"#444444"} btnText={"SUBSCRIBE"} /></div>

                            </form>
                        </SubscibeWrapper>

                    </CatWrapper>

                    <MarginTop />

                </RecentPostWrapper>
                {/*================ HomePage Sidebar End*=============/}




                {/* Rightside */}
                {/* Entertainment Category */}
                <PostCategory>
                    <Title title={'Entertainment'} />
                    <CatWrapper>
                        <EnterCat>
                            <WrapperDiv w={'100%'}>
                                <Postcard
                                    w={"100%"}
                                    size={'18px'}
                                    linkUrl={'/contact'}
                                    imgUrl={entertainment[0].postImg}
                                    linkDisplay={'inline-block'}
                                    linkColor={"#8ADEB4"}
                                    text={entertainment[0].postCat}

                                />
                                <Content
                                    contentHeader={entertainment[0].postTitle}
                                    size={'25px'}
                                    headerColor={"black"}
                                    IconColor={'grey'}
                                    editIcon={<AiFillEdit />}
                                    editText={entertainment[0].postAuthor}
                                    dateIcon={<FaRegClock />}
                                    dateText={entertainment[0].postDate}
                                    linkDisplay={'none'} />
                                <p>{entertainment[0].postBody}</p>
                            </WrapperDiv>
                        </EnterCat>
                        {/* Entertainment RECENT POST */}
                        <EnterRecent>
                            {
                                entertainment && entertainment.map((post, index) => (
                                    <PostLink to='/contact' key={index} >
                                        <RecentPost pdtop={post.id === 1 && "0"} lastItemBorder={post.id === entertainment.length && "0"}>
                                            <RecentPostImg>
                                                <img src={post.postImg} alt="" />
                                            </RecentPostImg>

                                            <RecentPostContent>
                                                <PostTitleStyled>Magna Dapibus Sollicitudin Consectetur Lorem</PostTitleStyled>
                                                <PostIconStyled>
                                                    <EditStyled>
                                                        <EditIconStyled>
                                                            {<AiFillEdit />}
                                                        </EditIconStyled>
                                                        <EditTitledStyled>
                                                            {post.postAuthor}
                                                        </EditTitledStyled>
                                                    </EditStyled>

                                                    <DateStyled>
                                                        <DateIconStyled>
                                                            {<FaRegClock />}
                                                        </DateIconStyled>
                                                        <DateTitledStyled>
                                                            {post.postDate}
                                                        </DateTitledStyled>
                                                    </DateStyled>
                                                </PostIconStyled>
                                            </RecentPostContent>
                                        </RecentPost>
                                    </PostLink>
                                ))
                            }
                        </EnterRecent>
                    </CatWrapper>



                    {/* TECH & BUSINESS CATEGORY */}
                    <CatWrapper>

                        {/* TECHNOLOGY CATEGORY */}
                        <EnterCat>
                            <Title title={'TECHNOLOGY'} />
                            <WrapperDiv w={'100%'}>
                                <Postcard
                                    w={"100%"}
                                    text={tech[0].postCat}
                                    content={tech[0].postTitle}
                                    linkColor={"#E44549"}
                                    headingColor={"white"}
                                    iconColor={"white"}
                                    linkUrl={'/contact'}
                                    editIcon={<AiFillEdit />}
                                    postAuthor={tech[0].postAuthor}
                                    dateIcon={<FaRegClock />}
                                    dateText={tech[0].postDate}
                                    commentIcon={<FaRegComment />}
                                    commentCounter={'0'}
                                    linkDisplay={'inline-block'}
                                    imgUrl={tech[0].postImg} />
                            </WrapperDiv>

                            {
                                tech && tech.map((post, index) => (
                                    <PostLink to='/contact' key={index} >
                                        <RecentPost pdtop={post.id === 1 && "20px"} lastItemBorder={post.id === tech.length && "0"}>
                                            <RecentPostImg>
                                                <img src={post.postImg} alt="" />
                                            </RecentPostImg>

                                            <RecentPostContent>
                                                <PostTitleStyled>Magna Dapibus Sollicitudin Consectetur Lorem</PostTitleStyled>
                                                <PostIconStyled>
                                                    <EditStyled>
                                                        <EditIconStyled>
                                                            {<AiFillEdit />}
                                                        </EditIconStyled>
                                                        <EditTitledStyled>
                                                            {post.postAuthor}
                                                        </EditTitledStyled>
                                                    </EditStyled>

                                                    <DateStyled>
                                                        <DateIconStyled>
                                                            {<FaRegClock />}
                                                        </DateIconStyled>
                                                        <DateTitledStyled>
                                                            {post.postDate}
                                                        </DateTitledStyled>
                                                    </DateStyled>
                                                </PostIconStyled>
                                            </RecentPostContent>
                                        </RecentPost>
                                    </PostLink>
                                ))
                            }
                        </EnterCat>

                        {/* BUSINESS CATEGORY*/}
                        <EnterRecent>
                            <Title title={'BUSINESS'} />
                            <WrapperDiv w={'100%'}>
                                <Postcard
                                    w={"100%"}
                                    text={business[0].postCat}
                                    content={business[0].postTitle}
                                    linkColor={"#E04D79"}
                                    headingColor={"white"}
                                    iconColor={"white"}
                                    linkUrl={'/contact'}
                                    editIcon={<AiFillEdit />}
                                    postAuthor={business[0].postAuthor}
                                    dateIcon={<FaRegClock />}
                                    dateText={business[0].postDate}
                                    commentIcon={<FaRegComment />}
                                    commentCounter={'0'}
                                    linkDisplay={'inline-block'}
                                    imgUrl={business[0].postImg} />
                            </WrapperDiv>


                            {
                                business && business.map((post, index) => (
                                    <PostLink to='/contact' key={index} >
                                        <RecentPost pdtop={post.id === 1 && "20px"} lastItemBorder={post.id === business.length && "0"}>
                                            <RecentPostImg>
                                                <img src={post.postImg} alt="" />
                                            </RecentPostImg>

                                            <RecentPostContent>
                                                <PostTitleStyled>Magna Dapibus Sollicitudin Consectetur Lorem</PostTitleStyled>
                                                <PostIconStyled>
                                                    <EditStyled>
                                                        <EditIconStyled>
                                                            {<AiFillEdit />}
                                                        </EditIconStyled>
                                                        <EditTitledStyled>
                                                            {post.postAuthor}
                                                        </EditTitledStyled>
                                                    </EditStyled>

                                                    <DateStyled>
                                                        <DateIconStyled>
                                                            {<FaRegClock />}
                                                        </DateIconStyled>
                                                        <DateTitledStyled>
                                                            {post.postDate}
                                                        </DateTitledStyled>
                                                    </DateStyled>
                                                </PostIconStyled>
                                            </RecentPostContent>
                                        </RecentPost>
                                    </PostLink>
                                ))
                            }
                        </EnterRecent>
                    </CatWrapper>


                    {/* FASHION CATEGORY */}
                    <CatWrapper flDir={'column'}>
                        <Title title={'FASHION'} mb={"-10px"} />
                        {
                            fashion && fashion.map((post, index) => (
                                <FashionCat>
                                    {/* Fashion Cat Image */}
                                    <FashionCatImag>
                                        <PostLink to={'/contact'}>
                                            <img src={post.postImg} alt="" />
                                        </PostLink>
                                    </FashionCatImag>
                                    {/* Fashion Cat Content */}
                                    <FashionCatText>
                                        <PostIconStyled>
                                            <EditStyled>
                                                <EditIconStyled>
                                                    {<AiFillEdit />}
                                                </EditIconStyled>
                                                <EditTitledStyled>
                                                    {post.postAuthor}
                                                </EditTitledStyled>
                                            </EditStyled>

                                            <DateStyled>
                                                <DateIconStyled>
                                                    {<FaRegClock />}
                                                </DateIconStyled>
                                                <DateTitledStyled>
                                                    {post.postDate}
                                                </DateTitledStyled>
                                            </DateStyled>
                                        </PostIconStyled>
                                        <PostLink to={'/contact'}>
                                            <PostTitleStyled fnt={"25px"} lingHeight={"30px"}>{post.postTitle}</PostTitleStyled>     </PostLink>
                                        <p>{post.postBody}</p>
                                    </FashionCatText>
                                </FashionCat>
                            ))
                        }
                    </CatWrapper>
                </PostCategory>
            </RecentWrapper>

            <MarginTop />

            {/*  Adbanner */}
            <Adbanner pTB={"60px"} />
        </HomeWrapper >
    );
}

export default Home;




















