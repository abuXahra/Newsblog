


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
import Loader from '../loader/Loader';
import Pagination from '../pagination_corrent/Pagination';
import Markdown from 'markdown-to-jsx';
// import Pagination from '../../components/pagination/Pagination'



const POSTS_PER_PAGE = 5;


const Category = ({ setCatId }) => {
    const [fashion, setFashion] = useState(FASHION)
    const [catPosts, setCatPosts] = useState('')
    const [catTitle, setCatTitle] = useState('')
    const { categoryId } = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);  







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
        setIsLoading(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}/posts`)

            setCatPosts(res.data)
            setIsLoading(false)
            console.log(res.data)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchCotegoryPosts()
        fectCategoryTitle()
    }, [categoryId, page])



    const totalPages = Math.ceil(catPosts.length / POSTS_PER_PAGE);
    const currentPosts = catPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE); 


    return (
        <CategoryWraper>
            <CategoryTitle>
                <div>
                    <h1>{catTitle ? (catTitle) : ('TITLE')}</h1>
                </div>
            </CategoryTitle>
            <CategoryContent>

                {/* ============Category main content============= */}

                {
                    isLoading ?
                        <Loader /> :
                        <CategoryPostsWrapper>
                            {
                                currentPosts && currentPosts.map((post) => (
                                    <CategoryPosts>
                                        <CategoryPostsImag>
                                            <PostLink to={`/post/${post._id}`}>
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
                                            <p><Markdown>{post.desc.substring(0, 230)}</Markdown></p>
                                        </CategoryPostsText>
                                    </CategoryPosts>

                                ))
                            }
                                 <Pagination
                                    currentPage={currentPage}
                                    onPageChange={setCurrentPage}
                                    totalPages={totalPages}
                                    pageSize={POSTS_PER_PAGE}
                                    />  
                            
                        </CategoryPostsWrapper>

                }


                {/* ============Category sidebar============= */}
                <CategorySidbar>
                    <Sidebar catId={categoryId} />
                </CategorySidbar>
            </CategoryContent>

        </CategoryWraper>
    );
}

export default Category;
