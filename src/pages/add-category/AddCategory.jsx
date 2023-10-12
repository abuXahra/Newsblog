import React, { useState } from 'react';
import { AddCategoryContent, AddCategoryWrapper } from './AddCategory.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';

const AddCategory = () => {

    const [category, setCategory] = useState('')

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const addHandler = (e) => {
        e.preventDefault();

        setCategory('');

    }


    return (
        <AddCategoryWrapper>
            <AddCategoryContent onSubmit={addHandler}>
                <h3>Add Category</h3>
                <input
                    type={'text'}
                    value={category}
                    onchange={categoryHandler}
                    placeHolder={''}
                />
                <div>
                    <Button
                        btnBorder={"none"}
                        btnColor={"black"}
                        btnText={'ADD CATEGORY'}
                        btnTxtClr={'white'}
                        btnPd={"10px 20px"}
                    />
                </div>
            </AddCategoryContent>
        </AddCategoryWrapper>
    );
}

export default AddCategory;
