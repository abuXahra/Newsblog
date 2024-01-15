import React, { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { FASHION } from '../../data/Posts'
import { POSTS } from '../../data/Posts';
import { PostLink } from '../../pages/home/Home.style';
import { CategoryContent, CategoryPosts, CategoryPostsImag, CategoryPostsText, CategoryPostsWrapper, CategorySidbar, CategoryTitle, CategoryWraper, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostIconStyled, PostTitleStyled } from './Category.style';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Category = () => {
    const [fashion, setFashion] = useState(FASHION)
    const [catPosts, setCatPosts] = useState('')
    const [catTitle, setCatTitle] = useState('')
    const { categoryId } = useParams()





    // fetch category title
    const fectCategoryTitle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`)
            setCatTitle(res.data.title)
        } catch (err) {
            console.log(err)
        }
    }


    // fetch category pots
    const fetchCotegoryPosts = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}/posts`)
            setCatPosts(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchCotegoryPosts()
        fectCategoryTitle()
    }, [categoryId])


    return (
        <CategoryWraper>
            <CategoryTitle>
                <div>
                    <h1>{catTitle}</h1>
                </div>
            </CategoryTitle>
            <CategoryContent>

                {/* ============Category main content============= */}
                <CategoryPostsWrapper>
                    {

                        catPosts && catPosts.map((post) => (
                            <CategoryPosts>
                                <CategoryPostsImag>
                                    <PostLink to={'/contact'}>
                                        <img src={`${process.env.REACT_APP_URL}/images/${post.photo}`} alt="" />
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
                                                {post.createdAt}
                                            </DateTitledStyled>
                                        </DateStyled>
                                    </PostIconStyled>
                                    <PostLink to={`/post/${post._id}`}>
                                        <PostTitleStyled fnt={"25px"} lingHeight={"30px"}>{post.title}</PostTitleStyled>     </PostLink>
                                    <p>{post.desc.substring(0, 230)}</p>
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
