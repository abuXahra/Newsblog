import React, { useEffect, useState } from 'react';
import Postcard from '../../components/postcard/Postcard';
import single from '../../images/single.jpg';
import { AuthorContainer, AuthorDetail, AutorImage, CatLink, CommentForm, EdDel, NextPost, PostCat, PostLink, PostNavigation, PostWriteUp, PreviousPost, RecentComment, RecentCommentAuthorandDate, RecentCommentContentAuthor, RecentCommentContents, RecentCommentImg, RecentCommentReply, RecentLinks, RecentPostCat, RecentPostContentWrapper, RecentPostContents, RecentPostImg, RecentPosts, RecentPostsContents, ShareIcon, ShareText, SingRecentPost, SinglePostContent, SinglePostImage, SinglePostPost, SinglePostShare, SinglePostSidebar, SinglePostWrapper, SocialLink } from './SinglePost.style';
import { AiFillEdit } from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaRegClock, FaRegComment, FaRegEdit, FaReply, FaTrashAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import Sidebar from '../../components/sidebar/Sidebar';
import innerpostimage from '../../images/innerpostimage.jpg'
import placeHolder from '../../images/placeholder_image.png'
import vehicl from '../../images/slide_6.jpg'
import { MarginTop } from '../../components/sidebar/Sidebar.style';
import Adbanner from '../../components/header/adbanner/Adbanner';
import Title from '../../components/section-title/Title';
import Links from '../../components/clicks/links/Links';
import Button from '../../components/clicks/button/Button';
import { DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostIconStyled, PostTitleStyled, RecentPost, RecentPostContent } from '../home/Home.style';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../components/context/UserContext';
import { useContext } from 'react';
import Loader from '../../components/loader/Loader';
import { Controller } from 'swiper/modules';
import Content from '../../components/content/Content';


///Pagination tutorial
//https://www.youtube.com/watch?v=yY1n0sDZPtI


const SinglePost = () => {
    const { postId } = useParams()
    const [post, setPosts] = useState({})
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [comments, setComments] = useState([])

    // comment form variables
    const [comment, setComment] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [catId, setCatId] = useState()
    const [postCats, setPostCats] = useState()


    // fetch post function
    const fetchPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(process.env.REACT_APP_URL + `/api/posts/` + postId);
            setPosts(res.data)
            console.log('===============post==============')
            console.log(res.data)
            setCatId(res.data.categories[0]._id)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }

    // useEffect
    useEffect(() => {
        fetchPost();
    }, [postId])

    // delete post function
    const handleDelete = async () => {
        setLoader(true)
        try {
            const res = await axios.delete(process.env.REACT_APP_URL + `/api/posts/` + postId, { withCredentials: true });
            setLoader(false)
            navigate('/')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }

    // // fetch post categories function
    // const fetchPostCat = async () => {
    //     try {
    //         const res = await axios.get(URL + `/api/posts/${postId}/categories`)
    //         setPostCat(res.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }




    // post new comment functions
    const handlePostComment = async (e) => {
        const newComment = {
            comment: comment,
            email: email,
            author: name,
            website: website,
            postId: postId,
            userId: user?._id
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_URL}/api/posts/${postId}/comment`, newComment, { withCredentials: true })
            navigate(`/edit/${postId}`)
            console.log("res data: " + res.data)
        } catch (err) {
            console.log(err)
        }
    }


    // fetch post comment function
    const fetchPostComment = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/posts/${postId}/comments`)
            setComments(res.data)
        } catch (error) {

        }
    }


    // useEffect
    useEffect(() => {
        fetchPostComment()
    }, [postId])




    // const [posts, SetPosts] = useState(POSTS)
    const singlePost = {
        id: 1,
        postImg: single,
        postCat: "Sport News",
        postTitle: "Single Ranking Vertical Style",
        postAuthor: "John Maxwell",
        postDate: new Date().toDateString()
    }



    // fetch category pots
    const fetchCotegoryPosts = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${catId}/posts`)
            setPostCats(res.data.slice(0, 4))
            console.log("~~~~~~~~~~: ", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchCotegoryPosts()
    }, [catId])


    return (<>{loader ? <Loader /> :
        <SinglePostWrapper>
            <SinglePostImage>
                <Postcard
                    pl={"100px"}
                    pb={"100px"}
                    w={"100%"}
                    h={"400px"}
                    text={post.categories}
                    content={post.title}
                    linkColor={"#E46B45"}
                    headingColor={"white"}
                    iconColor={"white"}
                    linkUrl={'/contact'}
                    editIcon={<AiFillEdit />}
                    postAuthor={post.username}
                    dateIcon={<FaRegClock />}
                    dateText={new Date(post.createdAt).toDateString()}
                    commentIcon={<FaRegComment />}
                    commentCounter={post.comments?.length}
                    linkDisplay={'inline-block'}
                    imgUrl={`${process.env.REACT_APP_URL}/images/${post.photo}`} />

                {
                    user && user._id === post.userId &&
                    <EdDel>
                        <span onClick={() => { navigate(`/edit/${post._id}`) }}><FaRegEdit />Edit</span>
                        <span onClick={handleDelete}><FaTrashAlt />Delete</span>
                    </EdDel>
                }
            </SinglePostImage>
            <SinglePostContent>
                <SinglePostPost>
                    <SinglePostShare>
                        <ShareText>
                            <h2>0</h2>
                            <span>SHARES</span>
                        </ShareText>
                        <ShareIcon>
                            <span><FaFacebookF /></span>
                            <span><FaInstagramSquare /></span>
                            <span> <FaTwitter /></span>
                            <span><FaGooglePlusG /></span>
                        </ShareIcon>
                    </SinglePostShare>
                    <PostWriteUp>
                        <p>{post.desc}</p>
                    </PostWriteUp>
                    <MarginTop />
                    <MarginTop />
                    <SinglePostShare>
                        <ShareText>
                            <h2>0</h2>
                            <span>SHARES</span>
                        </ShareText>
                        <ShareIcon>
                            <span><FaFacebookF /></span>
                            <span><FaInstagramSquare /></span>
                            <span> <FaTwitter /></span>
                            <span><FaGooglePlusG /></span>
                        </ShareIcon>
                    </SinglePostShare>
                    <MarginTop />
                    <MarginTop />

                    {/*  Adbanner */}
                    <Adbanner pTB={"0"} bdr={"0"} bgImg={'none'} />

                    {/* Post Nagivation */}
                    <PostNavigation>
                        <PreviousPost>
                            <PostLink>
                                <h4>Previous Post</h4>
                                <p>{singlePost.postTitle}</p>
                            </PostLink>
                        </PreviousPost>
                        <NextPost>
                            <PostLink>
                                <h4>Next Post</h4>
                                <p>{singlePost.postTitle}</p>
                            </PostLink>
                        </NextPost>
                    </PostNavigation>

                    {/* Post Category */}
                    <MarginTop />
                    <PostCat>
                        {post.categories?.map((cat) =>
                        (<CatLink key={cat._id} to={`/category/${cat._id}`}>
                            {cat.title}
                        </CatLink>))}
                    </PostCat>

                    {/* Post Author  */}
                    <MarginTop />
                    <AuthorContainer>
                        <AutorImage>
                            <img src={placeHolder} alt="" />
                        </AutorImage>
                        <AuthorDetail>
                            <h3>John Maxwell</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere minima cum, deserunt recusandae dolores ullam voluptatem blanditiis, commodi, soluta laborum reprehenderit? Sit quis at perspiciatis deserunt labore porro, eius expedita.</p>
                            <span>
                                <SocialLink to='/'><FaFacebookF /></SocialLink>
                                <SocialLink to='/'><FaInstagramSquare /></SocialLink>
                                <SocialLink to='/'><FaTwitter /></SocialLink>
                                <SocialLink to='/'><FaGooglePlusG /></SocialLink>
                            </span>
                        </AuthorDetail>
                    </AuthorContainer>

                    {/* Recent Post */}
                    <MarginTop mt={"50px"} />

                    <Title mb="20px" title="RECENT POSTS" />
                    <SingRecentPost>
                        {
                            postCats && postCats.map((catpost) => (
                                <RecentPosts dsp={catpost._id === postId && "none"} key={catpost._id} onClick={() => navigate(`/post/${catpost._id}`)}>
                                    <RecentPostsContents>
                                        <img src={`${process.env.REACT_APP_URL}/images/${catpost.photo}`} alt="" />

                                    </RecentPostsContents>
                                    <MarginTop mt={"10px"} />
                                    <p>{catpost.title}</p>
                                </RecentPosts>
                            ))
                        }
                    </SingRecentPost>


                    <MarginTop />

                    {
                        comments.map((c, i) => (
                            <RecentComment>
                                <RecentCommentImg>
                                    <img src={placeHolder} alt="" />
                                </RecentCommentImg>
                                <RecentPostContentWrapper>
                                    <RecentCommentAuthorandDate>
                                        <RecentCommentContentAuthor>
                                            <h3>{c.author}</h3>
                                            <span>
                                                <FaRegClock />
                                                <p>{new Date(c.createdAt).toDateString()}</p>
                                            </span>
                                        </RecentCommentContentAuthor>
                                        <RecentCommentReply>
                                            {/* <span><FaReply /> Reply</span> */}
                                        </RecentCommentReply>
                                    </RecentCommentAuthorandDate>

                                    <RecentCommentContents>
                                        {c.comment}
                                    </RecentCommentContents>

                                </RecentPostContentWrapper>
                            </RecentComment>
                        ))
                    }

                    {/* End of Recent Comment */}


                    {/* Comments Form*/}
                    <MarginTop mt={"30px"} />
                    <CommentForm>
                        <h4>LEAVE A COMMENT</h4>
                        <form onSubmit={handlePostComment}>
                            <textarea value={comment} onChange={(e) => { setComment(e.target.value) }} name="" id="" cols="30" rows="10" placeholder='Add comment'></textarea>
                            <span>
                                <input value={name} type="name" onChange={(e) => { setName(e.target.value) }} name="" id="" placeholder='name*' />
                                <input value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} name="" id="" placeholder='email*' />
                                <input value={website} type="text" onChange={(e) => { setWebsite(e.target.value) }} name="" id="" placeholder='website' />
                            </span>
                            <input type="checkbox" name="" id="" />
                            <MarginTop mt={"10px"} />
                            <Button
                                btnText={"POST COMMENT"}
                                btnColor={"#fff"}
                                btnTxtClr={"#000"}
                                btnBorder={"2px solid #000"}
                            />
                        </form>
                    </CommentForm>


                </SinglePostPost>
                <SinglePostSidebar>
                    <Sidebar fxTp={"0"} />
                </SinglePostSidebar>
            </SinglePostContent>
        </SinglePostWrapper >}
    </>
    );
}

export default SinglePost;
