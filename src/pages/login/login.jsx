import React, { useState } from 'react';
import { LoginContent, LoginWrapper, RegisterConst } from './login.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import axios from 'axios'

// 3:7:3

const Login = () => {
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const res = axios.post('/api/auth/login', { email, password })

            setEmail('');
            setPassword('');

        } catch (error) {

        }

    }


    return (
        <LoginWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Register'} linkUrl={'/register'} /></RegisterConst>
            <LoginContent onClick={loginHandler}>
                <h2>Login</h2>
                <Input inputType={'email'} inputValue={email} onchangeHandler={emailHandler} placeHolder={'email'} />
                <Input inputType={'password'} inputValue={password} onchangeHandler={passwordHandler} placeHolder={'password'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Login'} btnTxtClr={'white'} />
                <Links linkColor="none" linkText={'Forgotten your Password? Reset it here'} linkUrl={'/reset'} linkPd={"0"} />
            </LoginContent>
        </LoginWrapper>
    );
}

export default Login;
