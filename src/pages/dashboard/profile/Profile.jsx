import React, { useContext, useEffect, useState } from 'react';
import { CategorySpan, PostLinks, ProfileContent, ProfileCredentials, ProfileData, ProfilePicture, ProfilePost, ProfileWrapper } from './Profile.style';
import { CategoryPosts, CategoryPostsImag, CategoryPostsText } from '../../../components/category/Category.style';
import { DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostIconStyled, PostLink, PostTitleStyled } from '../../home/Home.style';
import { AiFillEdit, AiOutlineLogout } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { FASHION } from '../../../data/Posts'
import placeHolder from '../../../images/placeholder_image.png'
import { MarginTop } from '../../../components/sidebar/Sidebar.style';
import Input from '../../../components/input/Input';
import Button from '../../../components/clicks/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../components/context/UserContext';
import axios from 'axios';
import { URL } from '../../../url';
import Links from '../../../components/clicks/links/Links';
import Loader from '../../../components/loader/Loader';
import AddCategory from "../../add-category/AddCategory";

const Profile = () => {



    const [fashion, setFashion] = useState(FASHION)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    const [loader, setLoader] = useState(false)
    const [userUpdated, setUserUpdated] = useState(false)
    const [userPost, setUserPost] = useState('')
    const [category, setCategory] = useState('')




    // Inputs  variable vinctions
    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }


    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }



    // User Update Fuction
    const updateHandler = async () => {
        const userUpdate = {
            username: name,
            email: email,
            userId: user._id,
            password: password,
        }
        setLoader(true)
        setUserUpdated(false)
        try {
            const res = await axios.put(`${URL}/api/users/${user._id}`, userUpdate, { withCredentials: true })
            console.log(res.data)
            setUserUpdated(true)
            setLoader(false)
        } catch (err) {
            setUserUpdated(false)
            console.log(err)
        }

    }



    // User Delete Fuction
    const deleteHandler = async (e) => {
        try {
            const res = await axios.delete(`${URL}/api/users/${user._id}`, { withCredentials: true })
            setUser(null)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }




    // Logout function
    const handleLogout = async () => {

        try {
            const res = await axios.get(URL + '/api/auth/logout', { withCredentials: true })
            setUser(null)
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }


    // fetch profile data
    const fetchProfile = async () => {
        try {
            const res = await axios.get(URL + '/api/users/' + user._id)
            setName(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [user?._id])






    // fetch user post function
    const fetchUserPost = async () => {
        try {
            const res = await axios.get(`${URL}/api/posts/user/${user._id}`)
            console.log(`user post are" ${res.data}`)
            setUserPost(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUserPost()
    }, [user?._id])


    console.log(userPost)


    const postCategory = async () => {

        try {
            const res = await axios.post(`${URL}/api/categories/create`, { title: category }, { withCredentials: true })
            console.log(res.data)
            setCategory('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ProfileWrapper> {loader ? <Loader /> :
            <ProfileContent>
                {/* USER POSTS */}
                <ProfilePost>
                    <h3>My Posts</h3>
                    {
                        userPost && userPost?.map((post) => (
                            <CategoryPosts key={post._id}>
                                <CategoryPostsImag>
                                    <PostLink to={`/post/${post._id}`}>
                                        <img src={`${URL}/images/${post.photo}`} alt="" />
                                    </PostLink>
                                </CategoryPostsImag>

                                {/* Post Category Contents */}
                                <CategoryPostsText>
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
                                        <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{post.title}</PostTitleStyled>     </PostLink>
                                    <p>{post.desc.substring(0, 230)}</p>

                                    <CategorySpan>
                                        {
                                            post.categories.map((cat) => (
                                                <div key={cat._id}>
                                                    <PostLinks to={`/category/${cat._id}`} linkColor='white'>{cat.title}</PostLinks>
                                                </div>
                                            ))
                                        }
                                    </CategorySpan>
                                </CategoryPostsText>


                            </CategoryPosts>
                        ))

                    }
                </ProfilePost>

                {/* INPUT FORM CONTAINER */}
                <ProfileData onSubmit={updateHandler}>
                    <h3>Profile</h3>
                    <ProfilePicture>
                        <img src={placeHolder} alt="" srcset="" />
                    </ProfilePicture>
                    <MarginTop mt={"20px"} />
                    {/* INPUT FORM */}
                    <ProfileCredentials onSubmit={updateHandler}>
                        <Input
                            inputType={'text'}
                            inputValue={name}
                            inputColor={"#000"}
                            onchangeHandler={nameHandler}
                            placeHolder={'username'}
                        />
                        <Input
                            inputType={'email'}
                            inputValue={email}
                            inputColor={'#000'}
                            onchangeHandler={emailHandler}
                            placeHolder={'email'}
                        />
                        <Input
                            inputType={'password'}
                            inputValue={password}
                            inputColor={'#000'}
                            onchangeHandler={passwordHandler}
                            placeHolder={'password'}
                        />
                        {
                            user &&
                            <span>

                                <Button
                                    btnBorder={"none"}
                                    btnColor={"green"}
                                    btnText={'UPDATE'}
                                    btnTxtClr={'white'}
                                    btnPd={"8px 10px"}
                                />


                                <div onClick={deleteHandler}>
                                    DELETE
                                </div>
                                <div onClick={handleLogout}>
                                    <AiOutlineLogout /> LOGOUT
                                </div>
                            </span>
                        }
                    </ProfileCredentials>
                    {userUpdated && <div>fghfghjhk jkhkjh jkhk hk hk jh k</div>}

                    <AddCategory
                        value={category}
                        placeHolder={'Add Category'}
                        onchange={(e) => (setCategory(e.target.value))}
                        sumbitHandler={postCategory}
                    />

                    {/* <div>
                        {
                            category?.map((cat) => {
                                <div key={cat._id}>{cat.title}</div>
                            })
                        }
                    </div> */}
                </ProfileData>
            </ProfileContent>}
        </ProfileWrapper>
    );
}


export default Profile;



