import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { FASHION } from '../../data/Posts'
import { POSTS } from '../../data/Posts';
import { PostLink } from '../../pages/home/Home.style';
import { CategoryContent, CategoryPosts, CategoryPostsImag, CategoryPostsText, CategoryPostsWrapper, CategorySidbar, CategoryTitle, CategoryWraper, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostIconStyled, PostTitleStyled } from './Category.style';
import Sidebar from '../sidebar/Sidebar';

const Category = () => {
    const [fashion, setFashion] = useState(FASHION)
    const [posts, setPosts] = useState(POSTS)

    return (
        <CategoryWraper>
            <CategoryTitle>
                <div>
                    <h1>Entertainment</h1>
                </div>
            </CategoryTitle>
            <CategoryContent>

                {/* ============Category main content============= */}
                <CategoryPostsWrapper>
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

                </CategoryPostsWrapper>


                {/* ============Category sidebar============= */}
                <CategorySidbar>
                    <Sidebar />
                </CategorySidbar>
            </CategoryContent>
        </CategoryWraper>
    );
}

export default Category;
