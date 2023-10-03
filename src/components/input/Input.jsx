import React from 'react';
import { InputWrapper } from './Input.style';

const Input = ({ inputType, inputValue, onchangeHandler, placeHolder }) => {
    return (
        <InputWrapper>
            <input type={inputType} name="" value={inputValue} onChange={onchangeHandler} placeholder={placeHolder} id="" />
        </InputWrapper>
    );
}

export default Input;
