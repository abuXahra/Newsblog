import React, { useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import { EditCategoryContent, EditCategoryWrapper } from './EditCategory.style';

const EditCategory = () => {

    const [category, setCategory] = useState('')

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const updateHandler = (e) => {
        e.preventDefault();

        setCategory('');
    }

    return (
        <EditCategoryWrapper>

            <EditCategoryContent onSubmit={updateHandler}>
                <h3>Edit Category</h3>
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
                        btnText={'UPDATE'}
                        btnTxtClr={'white'}
                        btnPd={"10px 20px"}
                    />
                </div>
            </EditCategoryContent>
        </EditCategoryWrapper>
    );
}

export default EditCategory;
