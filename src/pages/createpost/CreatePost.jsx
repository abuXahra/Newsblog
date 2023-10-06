

// -  post title
// - image
// - category
// - Decription


import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CreateCatOptions, CreateCatOptionsWrapper, CreatePostCat, CreatePostForm, CreatePostWrapper, PostPicture } from './CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';
import { CATEGORY } from '../../data/Category'
import { set } from 'mongoose';
import Button from '../../components/clicks/button/Button';

const CreatePost = () => {

    const [checkedValues, setValues] = useState([]);
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
                <div><Button btnText={'POST'} btnPd={'15px 30px'} /></div>

                {
                    checkedValues.map(v => (
                        <p>{v}</p>
                    ))
                }
            </CreatePostForm>
        </CreatePostWrapper>
    );
}

export default CreatePost;




{/* <CreateCatOptions key={cat.id}>


<input type='checkbox'
value={isCategory}
onValueChange={() => setIsCategory(cat.title)}
id='cat1'
/>
<label htmlFor="cat1">{cat.title}</label>
</CreateCatOptions> 

const [cat, setCat] = useState("")
const [cats, setCats] = useState([])

const addCategory = () =>{
    let updatedCats =[...cats]
    updatedCats.push(cat)
    setCat("")
    setCats(updated)
}




*/}