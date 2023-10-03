import React, { useState } from 'react';
import { RegisterConst, RegisterContent, RegisterWrapper } from './Register.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }


    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setPassword('');
    }


    return (
        <RegisterWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Login'} linkUrl={'/login'} /></RegisterConst>
            <RegisterContent onClick={loginHandler}>
                <h2>Register</h2>
                <Input inputType={'text'} inputValue={name} onchangeHandler={nameHandler} placeHolder={'name*'} />
                <Input inputType={'email'} inputValue={email} onchangeHandler={emailHandler} placeHolder={'email*'} />
                <Input inputType={'password'} inputValue={password} onchangeHandler={passwordHandler} placeHolder={'password*'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Register'} btnTxtClr={'white'} />
                {/* <Links linkColor="none" linkText={'Already Registered? Login here'} linkUrl={'/login'} linkPd={"0"} /> */}
            </RegisterContent>
        </RegisterWrapper>
    );
}

export default Register;
