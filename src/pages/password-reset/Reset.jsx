import React, { useState } from 'react';
import { RegisterConst, ResetContent, ResetWrapper } from './Reset.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';

const Reset = () => {

    const [email, setEmail] = useState('')


    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        setEmail('');
    }


    return (
        <ResetWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Register'} linkUrl={'/register'} /></RegisterConst>
            <ResetContent onClick={loginHandler}>
                <h2>Reset Password</h2>
                <Input inputType={'email'} inputValue={email} onchangeHandler={emailHandler} placeHolder={'email'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Reset'} btnTxtClr={'white'} />
                <Links linkColor="none" linkText={'Login Here'} linkUrl={'/login'} linkPd={"0"} />
            </ResetContent>
        </ResetWrapper>
    );
}

export default Reset;
