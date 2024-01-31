import React, { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import { EditCategoryContent, EditCategoryWrapper } from './EditCategory.style';
import AddCategory from '../add-category/AddCategory';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditCategory = () => {

    const [catTitle, setCatTitle] = useState('')
    const [catColor, setCatColor] = useState()
    // const {  } = useParams()
    const categoryId = useParams().id





    // Fetch category function
    const fetchCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`)
            setCatTitle(res.data.title)
            setCatColor(res.data.color)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchCat()
    }, [categoryId])






    // Update category function
    const updatCategory = async () => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`,
                { title: catTitle, color: catColor }, { withCredentials: true })
        } catch (err) {
            console.log(err)
        }
    }






    return (
        <EditCategoryWrapper>
            <AddCategory
                value={catTitle}
                placeHolder={catTitle}
                onchange={(e) => (setCatTitle(e.target.value))}
                sumbitHandler={updatCategory}
                valueColor={catColor}
                btnText={"Update Category"}
                onchangeColor={(e) => (setCatColor(e.target.value))}
            />
        </EditCategoryWrapper>
    );
}

export default EditCategory;
