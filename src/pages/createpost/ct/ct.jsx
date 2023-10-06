
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { AiFillPicture } from 'react-icons/ai';
import { CATEGORY } from '../../../data/Category'
import { set } from 'mongoose';
import Button from '../../../components/clicks/button/Button';
import { CreatePostWrapper, CreateCatOptions, CreateCatOptionsWrapper, CreatePostCat, CreatePostForm, PostPicture } from './ct.style';

const Ct = () => {

    const [isCategory, setIsCategory] = useState([]);
    const [category, setCategory] = useState(CATEGORY);
    const [showCat, setShowCat] = useState(false);
    const [arroIcon, setArroIcon] = useState(<FaArrowDown />)


    const handleShowCat = () => {
        setShowCat(!showCat)
        if (showCat) {
            setArroIcon(<FaArrowDown />)
        } else if (!showCat) {
            setArroIcon(<FaArrowUp />)
        }

    }


    const handleChange = (e) => {
        isCategory.title = e.target.value;


        if (e.target.checked) {
            // console.log(isCategory);
        }
    }

    const handleSubmit = () => {
        console.log(isCategory)
    }



    const [cat, setCat] = useState("")
    const [cats, setCats] = useState([])

    const addCategory = () => {
        let updatedCats = [...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }


    const deleteCategory = () => {

    }

    return (
        <CreatePostWrapper>
            <h2>Create Post</h2>
            <CreatePostForm onSubmit={handleSubmit}>
                <span>
                    <input type='text' placeHolder={'Title'} value={''} onChange={'titleHandler'} />
                    <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                    <PostPicture type="file" id="fileInput" />

                </span>
                <textarea cols="23" col rows={'23'} placeholder='post'></textarea>
                <CreatePostCat onClick={handleShowCat}>Category {arroIcon}</CreatePostCat>
                <CreateCatOptionsWrapper>
                    <CreateCatOptions>
                        <input
                            type='text' placeHolder={'Enter Category'} value={cat} onChange={(e) => setCat(e.target.value)}
                        />
                        <span onClick={addCategory} style={{ color: 'white', backgroundColor: "black", display: "flex", alignItems: "center", width: '200px', padding: "15px 30px'" }}>  Add Category</span>
                    </CreateCatOptions>
                    {

                        cats.map((ct) => (
                            <CreateCatOptions key={ct.id}>
                                <p>{ct}</p>
                            </CreateCatOptions>
                        ))
                    }
                </CreateCatOptionsWrapper>
                <p>Fashion</p>
                <div><Button btnText={'POST'} btnPd={'15px 30px'} /></div>


            </CreatePostForm>
        </CreatePostWrapper>
    );
}

export default Ct;
