
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CreateCatOptions, CreateCatOptionsWrapper, CreatePostCat, CreatePostForm, CreatePostWrapper, PostPicture } from '../createpost/CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';
import { CATEGORY } from '../../data/Category'
import { set } from 'mongoose';
import Button from '../../components/clicks/button/Button';

const EditPost = () => {

    const [checkedValues, setValues] = useState([]);
    const [category, setCategory] = useState(CATEGORY);
    const [showCat, setShowCat] = useState(false);
    const [arroIcon, setArroIcon] = useState(<FaArrowDown />)
    const [title, setTitle] = useState('')
    const [postContent, setPostContent] = useState('')



    const handleShowCat = () => {
        setShowCat(!showCat)
        if (showCat) {
            setArroIcon(<FaArrowDown />)
        } else if (!showCat) {
            setArroIcon(<FaArrowUp />)
        }

    }


    const handleChange = (e) => {

        const { value, checked } = e.target

        if (checked) {
            setValues(prev => [...prev, value])
        } else {
            setValues(pre => {
                return [...pre.filter(preValue => preValue !== value)]
            })
        }
    }

    console.log(checkedValues);

    const handleSubmit = () => {

    }

    return (
        <CreatePostWrapper>
            <h2>Edit Post</h2>
            <CreatePostForm onSubmit={handleSubmit}>
                <span>
                    <input type='text' placeHolder={'Title'} value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                    <PostPicture type="file" id="fileInput" />

                </span>
                <textarea value={postContent} onChange={(e) => { setPostContent(e.target.value) }} cols="23" col rows={'23'} placeholder='post'></textarea>
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
                <div><Button btnText={'UPDATE'} btnPd={'15px 30px'} /></div>
            </CreatePostForm>
        </CreatePostWrapper>
    );
}


export default EditPost;
