import React, { useState } from 'react';
import { AddCategoryContent, AddCategoryWrapper } from './AddCategory.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';

const AddCategory = ({ value, placeHolder, sumbitHandler, onchange, valueColor, onchangeColor }) => {

    // const [category, setCategory] = useState('')

    // const categoryHandler = (e) => {
    //     setCategory(e.target.value);
    // }

    // const addHandler = (e) => {
    //     e.preventDefault();

    //     setCategory('');

    // }


    return (
        <AddCategoryWrapper>
            <AddCategoryContent onSubmit={sumbitHandler}>
                <h3>Add Category</h3>
                <div>
                    <input
                        type={'text'}
                        value={value}
                        onChange={onchange}
                        placeHolder={placeHolder}
                    />
                    <input
                        type={'color'}
                        value={valueColor}
                        onChange={onchangeColor}
                    />
                </div>


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
