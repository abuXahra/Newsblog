

// -  post title
// - image
// - category
// - Decription


import React, { useContext, useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CreateCatOptions, CreateCatOptionsWrapper, CreatePostCat, CreatePostForm, CreatePostWrapper, PostPicture } from './CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';
import { CATEGORY } from '../../data/Category'
import Button from '../../components/clicks/button/Button';
import axios from 'axios';
import { UserContext } from '../../components/context/UserContext';
import { URL } from '../../url';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {


    const [showCat, setShowCat] = useState(false);
    const [category, setCategory] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [arroIcon, setArroIcon] = useState(<FaArrowDown />)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    console.log(file)
    const [checkedValues, setValues] = useState([]);
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    // console.log(user.username)



    const handleShowCat = () => {
        setShowCat(!showCat)
        if (showCat) {
            setArroIcon(<FaArrowDown />)
        } else if (!showCat) {
            setArroIcon(<FaArrowUp />)
        }

    }





    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {
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
            post.photo = filename

            // img upload
            try {
                const imgUpload = await axios.post(URL + '/api/upload', data)
                console.log(imgUpload.data)
            } catch (err) {
                console.log(err)
            }
        }

        // post creation
        try {
            const res = await axios.post(URL + '/api/posts/create', post, { withCredentials: true })
            navigate(`/post/${res.data._id}`)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }


    // fetch category function
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


    // handle check values
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


    // const handleCategoryChanges = (categoryId) => {
    //     const isSelected = selectedCategories.includes(categoryId);
    //     setSelectedCategories((prevSelected) =>
    //         isSelected
    //             ? prevSelected.filter((id) => id !== categoryId)
    //             : [...prevSelected, categoryId]
    //     );
    // };

    return (<> {
        user &&
        <CreatePostWrapper>
            <h2>Create Post</h2>
            <CreatePostForm onSubmit={handleSubmit}>

                <span>
                    <input type='text' placeHolder={'Title'} value={title} onChange={(e) => { setTitle(e.target.value) }} />

                    <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                    <PostPicture onChange={(e) => { setFile(e.target.files[0]) }} type="file" id="fileInput" />

                </span>
                <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} cols="23" col rows={'23'} placeholder='post'></textarea>
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
                <div><Button btnText={'CREATE'} btnPd={'15px 30px'} /></div>
            </CreatePostForm>
        </CreatePostWrapper>
    }
    </>
    );
}

export default CreatePost;


