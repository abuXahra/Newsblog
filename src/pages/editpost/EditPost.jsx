
import React, { useContext, useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { CreateCatOptions, CreateCatOptionsWrapper, CreatePostCat, CreatePostForm, CreatePostWrapper, DeletCat, PostPicture } from '../createpost/CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';
import { CATEGORY } from '../../data/Category'
import { set } from 'mongoose';
import Button from '../../components/clicks/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { URL } from '../../url';
import axios from 'axios';
import { UserContext } from '../../components/context/UserContext';
import Loader from '../../components/loader/Loader';

const EditPost = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')
    const [category, setCategory] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showCat, setShowCat] = useState(false);
    const [arroIcon, setArroIcon] = useState(<FaArrowDown />)
    const postId = useParams().id
    console.log(postId)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [post, setPost] = useState({})

    // Fetch single post function
    const fetchPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(URL + `/api/posts/` + postId);
            setPost(res.data)
            setTitle(res.data.title)
            setFile(res.data.photo)
            setDesc(res.data.desc)
            setCategory(res.data.categories)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchPost();
    }, [postId])


    // function to display or hide check value
    const handleShowCat = () => {
        setShowCat(!showCat)
        if (showCat) {
            setArroIcon(<FaArrowDown />)
        } else if (!showCat) {
            setArroIcon(<FaArrowUp />)
        }

    }


    // Handle checked value options
    const handleCategoryChange = (categoryId) => {
        // Update selected categories based on checkbox selection
        const updatedSelected = [...selectedCategories];
        if (updatedSelected.includes(categoryId)) {
            updatedSelected.splice(updatedSelected.indexOf(categoryId), 1);
        } else {
            updatedSelected.push(categoryId);
        }
        setSelectedCategories(updatedSelected);
    };

    // Post Update Function
    const handleUpdate = async (e) => {
        e.preventDefault()
        const updatedPost = {
            title,
            desc,
            username: user.username,
            userId: user._id,
            categories: selectedCategories
        }

        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append('img', filename)
            data.append('file', file)
            updatedPost.photo = filename

            // img upload
            try {
                const imgUpload = await axios.post(URL + '/api/upload', data)
                console.log(imgUpload.data)
            } catch (err) {
                console.log(err)
            }
        }

        // post update
        try {
            const res = await axios.put(`${URL}/api/posts/${postId}`, updatedPost, { withCredentials: true })
            navigate(`/post/${postId}`)
        } catch (error) {

        }
    }



    // delete category function
    const handleDelete = async () => {
        setLoader(true)
        try {
            // const res = await axios.delete(URL + `/api/posts/` + postId, { withCredentials: true });
            setLoader(false)
            navigate('/')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }


    const fetchCategory = async () => {
        try {
            const res = await axios.get(`${URL}/api/categories/`)
            console.log('=========================== categoriess==================================\n');
            console.log(res.data);
            setCategory(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [])



    return (<>{loader ? <Loader /> :
        <CreatePostWrapper>
            <h1>Edit Post</h1>
            picture: <img src={`${URL}/images/${file}`} alt="" srcset="" />

            <DeletCat>
                {post.categories?.map((cat) => (
                    <span onClick={handleDelete} key={cat._id}><FaTrashAlt /><p>{cat.title}</p></span>
                ))
                }

            </DeletCat>

            <CreatePostForm onSubmit={handleUpdate}>
                <span>
                    <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                    <PostPicture onChange={(e) => { setFile(e.target.files[0]) }} type="file" id="fileInput" />

                </span>
                <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} cols="23" col rows={'23'} placeholder=''></textarea>
                <CreatePostCat onClick={handleShowCat}>Category {arroIcon}</CreatePostCat>
                <CreateCatOptionsWrapper>
                    {
                        showCat && category?.map((cat) => (
                            <CreateCatOptions key={cat._id}>
                                <input type='checkbox'
                                    value={cat._id}
                                    onChange={() => handleCategoryChange(cat._id)}
                                />
                                <label htmlFor={cat._id}>{cat.title}</label>

                            </CreateCatOptions>
                        ))
                    }
                </CreateCatOptionsWrapper>
                <div><Button btnText={'UPDATE'} btnPd={'15px 30px'} /></div>
            </CreatePostForm>
        </CreatePostWrapper>
    }
    </>
    );
}


export default EditPost;
