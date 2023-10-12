import React, { useState } from 'react';
import { ProfileContent, ProfileCredentials, ProfileData, ProfilePicture, ProfilePost, ProfileWrapper } from './Profile.style';
import { CategoryPosts, CategoryPostsImag, CategoryPostsText } from '../../../components/category/Category.style';
import { DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostIconStyled, PostLink, PostTitleStyled } from '../../home/Home.style';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { FASHION } from '../../../data/Posts'
import placeHolder from '../../../images/placeholder_image.png'
import { MarginTop } from '../../../components/sidebar/Sidebar.style';
import Input from '../../../components/input/Input';
import Button from '../../../components/clicks/button/Button';

const Profile = () => {



    const [fashion, setFashion] = useState(FASHION)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }


    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const updateHandler = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setPassword('');
    }


    const deleteHandler = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <ProfileWrapper>
            <ProfileContent>
                <ProfilePost>
                    <h3>Your Posts</h3>
                    {
                        fashion && fashion.map((post) => (
                            <CategoryPosts>
                                <CategoryPostsImag>
                                    <PostLink to={'/contact'}>
                                        <img src={post.postImg} alt="" />
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
                                </CategoryPostsText>
                            </CategoryPosts>
                        ))

                    }

                </ProfilePost>

                <ProfileData onSubmit={updateHandler}>
                    <h3>Profile</h3>
                    <ProfilePicture>
                        <img src={placeHolder} alt="" srcset="" />
                    </ProfilePicture>
                    <MarginTop mt={"20px"} />
                    <ProfileCredentials>
                        <Input
                            inputType={'text'}
                            inputValue={name}
                            inputColor={'#000'}
                            onchangeHandler={nameHandler}
                            placeHolder={'username'}
                        />
                        <Input
                            inputType={'email'}
                            inputValue={email}
                            inputColor={'black'}
                            onchangeHandler={emailHandler}
                            placeHolder={'email'}
                        />
                        <Input
                            inputType={'password'}
                            inputValue={password}
                            inputColor={'black'}
                            onchangeHandler={passwordHandler}
                            placeHolder={'password'}
                        />
                        <span>
                            <Button
                                btnBorder={"none"}
                                btnColor={"black"}
                                btnText={'UPDATE'}
                                btnTxtClr={'white'}
                                btnPd={"10px 20px"}
                            />
                            <Button
                                btnBorder={"none"}
                                btnColor={"red"}
                                btnText={'DELETE'}
                                btnTxtClr={'white'}
                                btnPd={"10px 20px"}
                            />
                        </span>
                    </ProfileCredentials>
                </ProfileData>
            </ProfileContent>
        </ProfileWrapper>
    );
}


export default Profile;



