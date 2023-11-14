import React, { useEffect, useState } from 'react';
import Postcard from '../../components/postcard/Postcard';
import single from '../../images/single.jpg';
import { AuthorContainer, AuthorDetail, AutorImage, CatLink, CommentForm, EdDel, NextPost, PostCat, PostLink, PostNavigation, PostWriteUp, PreviousPost, RecentComment, RecentLinks, RecentPostCat, RecentPostImg, RecentPosts, RecentPostsContents, ShareIcon, ShareText, SingRecentPost, SinglePostContent, SinglePostImage, SinglePostPost, SinglePostShare, SinglePostSidebar, SinglePostWrapper, SocialLink } from './SinglePost.style';
import { AiFillEdit } from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaRegClock, FaRegComment, FaRegEdit, FaTwitter, FaYoutube } from 'react-icons/fa';
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
import { URL, IF } from '../../url';
import axios from 'axios';
import { UserContext } from '../../components/context/UserContext';
import { useContext } from 'react';
import Loader from '../../components/loader/Loader';
// 3:54:02


const SinglePost = () => {
    const { postId } = useParams()
    const [post, setPosts] = useState({})
    const [postCat, setPostCat] = useState([])
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)



    // fetch post function
    const fetchPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(URL + `/api/posts/` + postId);
            setPosts(res.data)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }


    // fetch post function
    const handleDelete = async () => {
        setLoader(true)
        try {
            const res = await axios.delete(URL + `/api/posts/` + postId, { withCredentials: true });
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


    // useEffect
    useEffect(() => {
        fetchPost();
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
    return (<>{loader ? <Loader /> :
        <SinglePostWrapper>
            <SinglePostImage>
                <Postcard
                    pl={"100px"}
                    pb={"100px"}
                    w={"100%"}
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
                    commentCounter={'0'}
                    linkDisplay={'inline-block'}
                    imgUrl={`http://localhost:5000/images/${post.photo}`} />
                {user &&
                    <EdDel>
                        <span  ><FaRegEdit />Edit</span>
                        <span onClick={handleDelete}><FaRegEdit />Delete</span>
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
                        <p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <h3>Maecenas sed diam eget risus varius</h3>
                        <p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue.</p>
                        <img src={innerpostimage} alt="" srcset="" />
                        <ul>
                            <li> Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                            <li> Donec id elit non mi porta gravida at eget metus.</li>
                            <li> Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li>
                            <li>  Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                            <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
                            <li> Integer posuere erat a ante venenatis dapibus posuere velit alique</li>
                        </ul>
                        <p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligaula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. egestas eget quam. Vivamus sagittis.</p>
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
                        {/* {postCat && postCat.map((category, index) => (<CatLink to={''}>{category}</CatLink>))} */}
                        {post.categories?.map((cat, index) => (<CatLink key={index} to={''}>{cat}</CatLink>))}
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
                        <RecentPosts>
                            <RecentPostsContents>
                                <img src={vehicl} alt="" />
                                <RecentPostCat>
                                    <RecentLinks>ENTERTAINMENT</RecentLinks>
                                </RecentPostCat>
                            </RecentPostsContents>
                            <MarginTop mt={"10px"} />
                            <p>Single Ranking Vertical Style</p>
                        </RecentPosts>

                        <RecentPosts>
                            <RecentPostsContents>
                                <img src={vehicl} alt="" />
                                <RecentPostCat>
                                    <RecentLinks>ENTERTAINMENT</RecentLinks>
                                </RecentPostCat>
                            </RecentPostsContents>
                            <MarginTop mt={"10px"} />
                            <p>Single Ranking Vertical Style</p>
                        </RecentPosts>

                        <RecentPosts>
                            <RecentPostsContents>
                                <img src={vehicl} alt="" />
                                <RecentPostCat>
                                    <RecentLinks>ENTERTAINMENT</RecentLinks>
                                </RecentPostCat>
                            </RecentPostsContents>
                            <MarginTop mt={"10px"} />
                            <p>Single Ranking Vertical Style</p>
                        </RecentPosts>
                    </SingRecentPost>

                    {/* Comments */}
                    <MarginTop mt={"30px"} />
                    <CommentForm>
                        <h4>LEAVE A COMMENT</h4>
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10" placeholder='Add comment'></textarea>
                            <span>
                                <input type="name" name="" id="" placeholder='name*' />
                                <input type="email" name="" id="" placeholder='email*' />
                                <input type="text" name="" id="" placeholder='website*' />
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

                    {/* RECENT COMMENT */}
                    <MarginTop />
                    <RecentComment>
                        <Title title={'RECENT COMMENTS'} mb={"8px"} />

                        <PostLink to='/contact'>
                            <RecentPost pdtop={singlePost.id === 1 && "0"} lastItemBorder={singlePost.id === singlePost.length && "0"}>
                                <RecentPostImg>
                                    <img src={singlePost.postImg} alt="" />
                                </RecentPostImg>

                                <RecentPostContent>
                                    <PostTitleStyled>Magna Dapibus Sollicitudin Consectetur Lorem</PostTitleStyled>
                                    <PostIconStyled>
                                        <EditStyled>
                                            <EditIconStyled>
                                                {<AiFillEdit />}
                                            </EditIconStyled>
                                            <EditTitledStyled>
                                                {singlePost.postAuthor}
                                            </EditTitledStyled>
                                        </EditStyled>

                                        <DateStyled>
                                            <DateIconStyled>
                                                {<FaRegClock />}
                                            </DateIconStyled>
                                            <DateTitledStyled>
                                                {singlePost.postDate}
                                            </DateTitledStyled>
                                        </DateStyled>
                                    </PostIconStyled>
                                </RecentPostContent>
                            </RecentPost>
                        </PostLink>
                    </RecentComment>
                    {/* End of Recent Comment */}


                </SinglePostSidebar>
            </SinglePostContent>
        </SinglePostWrapper >}
    </>
    );
}

export default SinglePost;
