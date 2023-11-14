

// -  post title
// - image
// - category
// - Decription


import React, { useContext, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CreateCatOptions, CreateCatOptionsWrapper, CreatePostCat, CreatePostForm, CreatePostWrapper, PostPicture } from './CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';
import { CATEGORY } from '../../data/Category'
import { set } from 'mongoose';
import Button from '../../components/clicks/button/Button';
import axios from 'axios';
import { UserContext } from '../../components/context/UserContext';
import { URL } from '../../url';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {


    const [showCat, setShowCat] = useState(false);
    const [category, setCategory] = useState(CATEGORY);
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

    // handle check values
    const handleChange = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setValues(prev => [...prev, value])
        } else {
            setValues(prev => {
                return [...prev.filter(preValue => preValue !== value)]
            })
        }
    }

    console.log(checkedValues);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {
            title,
            desc,
            username: user.username,
            userId: user._id,
            categories: checkedValues
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
                        showCat && category.map((ct) => (
                            <CreateCatOptions key={ct.id}>
                                <input type='checkbox'
                                    value={ct.title}
                                    onChange={handleChange}
                                    id='cat1'
                                />
                                <label>{ct.title}</label>
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


