import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import { HomePostSlideSection, HomeTopSection, HomeTopSectionContent, HomeTopSectionLeft, HomeTopSectionRight, HomeTopSectionRightContent, HomeWrapper, PostCategory, RecentPostWrapper, RecentWrapper, WrapperDiv, RecentPost, RecentPostImg, RecentPostContent, PostTitleStyled, PostIconStyled, EditStyled, EditIconStyled, EditTitledStyled, AuthorStyled, AuthorIconStyled, AuthorTitledStyled, DateStyled, DateIconStyled, DateTitledStyled, PostLink, EnternCat, EnterRecent, EnterCat, EntertainCatWrapper, CatWrapper, CategorList, CategoryListItem, MarginTop, FashionCat, FashionCatImag, FashionCatText, Ads, SocialMedia, SocialListItem, Subscibe, SubscibeWrapper, InputStyled, VideoWrapper, VideoCover, VideoPlayIcon, VideoOverlay, VideoAuthor, VideoTitle } from './Home.style';
import Postcard from '../../components/postcard/Postcard';
import { AiFillEdit } from 'react-icons/ai';
import { FaFacebookF, FaPlayCircle, FaRegClock, FaRegComment, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { UserContext } from '../../components/context/UserContext';
import BlogHeaderr from '../../components/blogheader/BlogHeaderr';
import { CatContent, CatContentContainer, Overlay } from '../../components/blogheader/BlogHeaderr.style';
import { EdDel } from '../singlepost/SinglePost.style';
import Markdown from 'markdown-to-jsx';


const Home = () => {
    const [posts, setPosts] = useState(POSTS)
    const [myposts, setMyPosts] = useState([])
    const [entertainment, setEntertainment] = useState(ENTERNAINMENT)
    const [tech, setTech] = useState(TECH)
    const [business, setBusiness] = useState(BUSINESS)
    const [fashion, setFashion] = useState(FASHION)
    const [slides, setSlide] = useState(POSTS)

    const [videoPosts, setVideoPosts] = useState()

    const { search } = useLocation(); //for search
    const [noResults, setNoResults] = useState(false)

    const [loader, setLoader] = useState(false) //Loader

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user)




    const fetchPost = async () => {

        setLoader(true)

        try {
            const res = await axios.get(process.env.REACT_APP_URL + "/api/posts" + search)
            setMyPosts(res.data.slice(0, 7))
            console.log('=====homepage===post')
            console.log(res.data)
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






    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FETCH HOMEPAGE CATEGORIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    // =======SPORT=======
    const [sportCat, setSportCat] = useState([]);
    const fetchSportCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65a5229eb91f0bb60c9ee7a3/posts`)
            setSportCat(res.data)
            console.log("======= sport CAT:", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchSportCat()
    }, [`65a5229eb91f0bb60c9ee7a3`])



    // =======ENTERTAINMENT=======
    const [entCat, setEntCat] = useState([]);
    const [entTitle, setEntTitle] = useState();
    const [entId, setEntId] = useState();
    const fetchEntCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65953b7d32a41da42689c306/posts`)
            setEntCat(res.data.slice(0, 5))
            console.log("======= Entertainment CAT:", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const fectEntCategoryTitle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65953b7d32a41da42689c306`)
            setEntTitle(res.data.title)
            setEntId(res.data._id)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchEntCat()
        fectEntCategoryTitle()
    }, [`65953b7d32a41da42689c306`])





    // =======TECHNOLOGY=======
    const [techCat, setTechCat] = useState([]);
    const [techTitle, setTechTitle] = useState();
    const [techId, setTechId] = useState();
    const fetchTechCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65980dc6546fb7eda488d346/posts`)
            setTechCat(res.data.slice(0, 5))
            console.log("======= Entertainment CAT:", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const fectTechCategoryTitle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65980dc6546fb7eda488d346`)
            setTechTitle(res.data.title)
            setTechId(res.data._id)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchTechCat()
        fectTechCategoryTitle()
    }, [`65980dc6546fb7eda488d346`])




    // =======BUSINESS=======
    const [busCat, setBuCat] = useState([]);
    const [busTitle, setBusTitle] = useState();
    const [busId, setBusId] = useState();
    const fetchBusCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65980d9c546fb7eda488d33d/posts`)
            setBuCat(res.data.slice(0, 5))
            console.log("======= Entertainment CAT:", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const fectBusCategoryTitle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65980d9c546fb7eda488d33d`)
            setBusTitle(res.data.title)
            setBusId(res.data._id)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchBusCat()
        fectBusCategoryTitle()
    }, [`65980d9c546fb7eda488d33d`])





    // =======EDUCATION=======
    const [eduCat, setEduCat] = useState([]);
    const [eduTitle, setEduTitle] = useState();
    const [EduId, setEduId] = useState();
    const fetchEduCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65bba55151cbd3d6e046563b/posts`)
            setEduCat(res.data.slice(0, 3))
            console.log("======= Entertainment CAT:", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const fectEduCategoryTitle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/65bba55151cbd3d6e046563b`)
            setEduTitle(res.data.title)
            setEduId(res.data._id)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchEduCat()
        fectEduCategoryTitle()
    }, [`65bba55151cbd3d6e046563b`])


    // ===================Fetch Video Post ========================

    const fetchVideoPost = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/videos`)
            setVideoPosts(res.data.slice(0, 3))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchVideoPost()
    }, [])



    return (<>
        <HomeWrapper>
            {/* Homepage Header-section */}
            <BlogHeaderr />

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
                                <WrapperDiv
                                    onClick={() => navigate(`/post/${post._id}`)}
                                    bg={`${process.env.REACT_APP_URL}/images/${post.photo}`}
                                    key={index}
                                    dsp={myposts[0]._id === post._id ? "none" : "flex"}>
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
                                                />
                                            </CatContent>

                                        </CatContentContainer>
                                    </Overlay>
                                </WrapperDiv>
                            ))) : (<div style={{ display: "flex", width: "100%", textAlign: "center", marginTop: "100px", justifyContent: "center" }}>No Post Found</div>)
                        }
                    </HomeTopSectionContent>
                </HomeTopSectionLeft>


                {/* right content */}






                <HomeTopSectionRight>
                    <h3>VIDEO POSTS</h3>
                    <hr />

                    {
                        videoPosts && videoPosts.map((video) => (
                            <Link to={video.videoUrl}>
                                <VideoWrapper>
                                    <VideoCover bg={`${process.env.REACT_APP_URL}/images/${video.photo}`}>
                                        <VideoOverlay>
                                            <VideoPlayIcon>
                                                <FaPlayCircle />
                                            </VideoPlayIcon>
                                        </VideoOverlay>
                                    </VideoCover>
                                    <VideoTitle>{video.title}</VideoTitle>
                                    <VideoAuthor>
                                        <div><AiFillEdit /> {video.username}</div>
                                        <div><FaRegClock /> {new Date(video.createdAt).toDateString()}</div>
                                    </VideoAuthor>
                                </VideoWrapper>
                            </Link>
                        ))}
                </HomeTopSectionRight>
            </HomeTopSection>

            {/* Post Slide */}
            <HomePostSlideSection>
                <Postslide slides={sportCat} />
            </HomePostSlideSection>


            {/* RECENT POST & POST CATEGORY SECTION */}
            <RecentWrapper>
                {/* HomePage Sidebar */}

                <RecentPostWrapper>
                    <div>
                        <Sidebar fxTp={"0"} />
                    </div>
                </RecentPostWrapper>
                {/*================ HomePage Sidebar End*=============/}




                {/* Rightside */}
                {/* Entertainment Category */}
                <PostCategory>
                    <Title title={'Entertainment'} />
                    <CatWrapper>
                        <EnterCat>
                            <WrapperDiv w={'100%'} h={"280px"}
                                onClick={() => navigate(``)}
                                bg={`${process.env.REACT_APP_URL}/images/${entCat[0]?.photo}`}
                            >
                                <Overlay>
                                    <CatContentContainer>
                                        <CatContent lf={"20px"} bt={"20px"}>
                                            <Content
                                                contentLinkColor={'green'}
                                                contentLinkText={entTitle}
                                                linkDisplay={"none"}
                                                contentHeader={''}
                                                headerColor={"white"}
                                                IconColor={"white"}
                                                linkUrl={``}
                                                editIcon={<AiFillEdit />}
                                                editText={entCat[0]?.username}
                                                dateIcon={<FaRegClock />}
                                                dateText={new Date(entCat[0]?.createdAt).toDateString()}
                                                commentIcon={<FaRegComment />}
                                                commentText={entCat[0]?.comments.length}
                                            />
                                        </CatContent>

                                    </CatContentContainer>
                                </Overlay>
                            </WrapperDiv>
                            <h4 style={{ marginTop: "10px" }}>{entCat[0]?.title}</h4>
                            <p style={{ marginTop: "10px", color: "grey", fontSize: "12px" }}>
                                <Markdown>
                                {entCat[0]?.desc.substring(200, 0)}
                                </Markdown> 
                                <a href='#' style={{fontStyle:'italic'}}> ...Read more</a> 
                            </p>
                        </EnterCat>


                        {/* Entertainment RECENT POST */}
                        <EnterRecent>
                            {
                                entCat && entCat.map((post, index) => (
                                    <PostLink to={`/post/${post._id}`} key={index} dsp={post._id === entCat[0]._id ? 'none' : 'flex'} >
                                        <RecentPost pdtop={post.id === 1 && "0"} lastItemBorder={post.id === entertainment.length && "0"}>
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
                                                            {new Date(post.createdAt).toDateString()}
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
                            <WrapperDiv w={'100%'} h={"280px"}
                                onClick={() => navigate(`/post/${techCat[0]?._id}`)}
                                bg={`${process.env.REACT_APP_URL}/images/${techCat[0]?.photo}`}
                            >
                                <Overlay>
                                    <CatContentContainer>
                                        <CatContent lf={"20px"} bt={"20px"}>
                                            <Content
                                                contentLinkColor={""}
                                                contentLinkText={techTitle}
                                                linkDisplay={"none"}
                                                contentHeader={techCat[0]?.title}
                                                headerColor={"white"}
                                                IconColor={"white"}
                                                linkUrl={''}
                                                editIcon={<AiFillEdit />}
                                                editText={techCat[0]?.username}
                                                dateIcon={<FaRegClock />}
                                                dateText={new Date(techCat[0]?.createdAt).toDateString()}
                                                commentIcon={<FaRegComment />}
                                                commentText={''}
                                            />
                                        </CatContent>

                                    </CatContentContainer>
                                </Overlay>
                            </WrapperDiv>

                            {
                                techCat && techCat.map((post, index) => (
                                    <PostLink to={`/post/${post._id}`} key={index} dsp={post._id === techCat[0]._id ? 'none' : 'flex'} >
                                        <RecentPost pdtop={index === 1 && "20px"} lastItemBorder={index === techCat?.length && "0"}>
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
                                                            {new Date(post.createdAt).toDateString()}
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
                            <WrapperDiv w={'100%'} h={"280px"}
                                onClick={() => navigate(`/post/${busCat[0]?._id}`)}
                                bg={`${process.env.REACT_APP_URL}/images/${busCat[0]?.photo}`}
                            >
                                <Overlay>
                                    <CatContentContainer>
                                        <CatContent lf={"20px"} bt={"20px"}>
                                            <Content
                                                contentLinkColor={""}
                                                contentLinkText={busTitle}
                                                linkDisplay={"none"}
                                                contentHeader={busCat[0]?.title}
                                                headerColor={"white"}
                                                IconColor={"white"}
                                                linkUrl={''}
                                                editIcon={<AiFillEdit />}
                                                editText={busCat[0]?.username}
                                                dateIcon={<FaRegClock />}
                                                dateText={new Date(busCat[0]?.createdAt).toDateString()}
                                                commentIcon={<FaRegComment />}
                                                commentText={''}
                                            />
                                        </CatContent>

                                    </CatContentContainer>
                                </Overlay>
                            </WrapperDiv>
                            {
                                busCat && busCat.map((post, index) => (
                                    <PostLink to={`/post/${post._id}`} key={index} dsp={post._id === busCat[0]._id ? 'none' : 'flex'} >
                                        <RecentPost pdtop={index === 1 && "20px"} lastItemBorder={index === techCat?.length && "0"}>
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
                                                            {new Date(post.createdAt).toDateString()}
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


                    {/* EDUCATION CATEGORY */}
                    <CatWrapper flDir={'column'}>
                        <Title title={'EDUCATION'} mb={"-10px"} />
                        {
                            eduCat && eduCat.map((post, index) => (
                                <FashionCat>
                                    {/* Education Cat Image */}
                                    <FashionCatImag>
                                        <PostLink to={`/post/${post._id}`}>
                                            <img src={`${process.env.REACT_APP_URL}/images/${post.photo}`} alt="" />
                                        </PostLink>
                                    </FashionCatImag>
                                    {/* Education Cat Content */}
                                    <FashionCatText onClick={() => navigate(`/post/${post._id}`)}>
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
                                                    {new Date(post.createdAt).toDateString()}
                                                </DateTitledStyled>
                                            </DateStyled>
                                        </PostIconStyled>
                                        <PostLink to={`/post/${post._id}`}>
                                            <PostTitleStyled fnt={"14px"} lingHeight={"20px"}>{post.title}</PostTitleStyled>
                                        </PostLink>
                                        <p> 
                                            <Markdown>{post.desc.substring(200, 0) + "...Read More"}</Markdown>
                                       </p>
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
    </>
    );
}

export default Home;




















