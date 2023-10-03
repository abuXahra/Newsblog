import React, { useState } from 'react';
import { LoginContent, LoginWrapper, RegisterConst } from './login.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
    }


    return (
        <LoginWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Register'} linkUrl={'/register'} /></RegisterConst>
            <LoginContent onClick={loginHandler}>
                <h2>Login</h2>
                <Input inputType={'text'} inputValue={name} onchangeHandler={nameHandler} placeHolder={'name'} />
                <Input inputType={'email'} inputValue={email} onchangeHandler={emailHandler} placeHolder={'email'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Login'} btnTxtClr={'white'} />
                <Links linkColor="none" linkText={'Forgotten your Password? Reset it here'} linkUrl={'/reset'} linkPd={"0"} />
            </LoginContent>
        </LoginWrapper>
    );
}

export default Login;
