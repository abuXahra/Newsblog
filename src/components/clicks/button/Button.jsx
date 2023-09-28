import React from 'react';
import { ButtonWrapper } from './Button.style';
import { Link } from 'react-router-dom';

const Button = ({ btnColor, btnText, btnTxtClr, btnBorder }) => {

    return (
        <ButtonWrapper btnColor={btnColor} btnTxtClr={btnTxtClr} btnBorder={btnBorder}>
            {btnText}
        </ButtonWrapper>
    )
}

export default Button;
