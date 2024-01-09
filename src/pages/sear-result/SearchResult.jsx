import React, { useEffect, useState } from 'react';
import { HomeTopSectionContent, WrapperDiv } from '../home/Home.style';
import Postcard from '../../components/postcard/Postcard';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock, FaRegComment } from 'react-icons/fa';
import axios, { Axios } from 'axios';
import { useLocation } from 'react-router-dom';





const SearchResult = () => {

    const [myposts, setMyPosts] = useState([])
    const { search } = useLocation();


    const fetchPost = async () => {
        try {

            const res = await axios.get(process.env.REACT_APP_URL + "/api/posts" + search)
            setMyPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [search])

    return (
        <div>
            <HomeTopSectionContent>
                {myposts && myposts.map((post, index) => (
                    <WrapperDiv key={index}>
                        <Postcard
                            postUrl={'/posts/1'}
                            w={"100%"}
                            size={'18px'}
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
                            linkDisplay={'none'}
                            imgUrl={post.photo} />
                    </WrapperDiv>
                ))}
            </HomeTopSectionContent>
        </div>
    );
}

export default SearchResult;
