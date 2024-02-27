import React from 'react';
import { InputWrapper } from './Input.style';

const Input = ({ inputType, inputValue, onchangeHandler, placeHolder, inputBg, inputColor,disabled }) => {
    return (
        <InputWrapper>
            <input
                type={inputType}
                value={inputValue}
                onChange={onchangeHandler}
                placeholder={placeHolder}
                inputBg={inputBg}
                inputColor={inputColor}
                disabled={disabled}
            />
        </InputWrapper>
    );
}

export default Input;
