import React from 'react';
import { ButtonWrapper } from './Button.style';
import { Link } from 'react-router-dom';

const Button = ({ btnColor, btnText }) => {

    return (
        <ButtonWrapper btnColor={btnColor}>
            {btnText}
        </ButtonWrapper>
    )
}

export default Button;
