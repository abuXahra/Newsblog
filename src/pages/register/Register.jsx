import React, { useState } from 'react';
import { ErrorStyled, RegisterConst, RegisterContent, RegisterWrapper } from './Register.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const nagivate = useNavigate()

    const nameHandler = (e) => {
        setUsername(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }


    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', { username, email, password })
            setError(false)
            // setSuccess(true);
            res.data && nagivate('/login')

            // res.data && window.location.replace('/login')
            setUsername("");
            setEmail('');
            setPassword('');
        } catch (err) {
            setError(true)
        }

    }


    return (
        <RegisterWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Login'} linkUrl={'/login'} /></RegisterConst>
            <RegisterContent onClick={registerHandler}>
                <h2>Register</h2>
                <Input inputType={'text'} inputValue={username} onchangeHandler={nameHandler} placeHolder={'username*'} />
                <Input inputType={'email'} inputValue={email} onchangeHandler={emailHandler} placeHolder={'email*'} />
                <Input inputType={'password'} inputValue={password} onchangeHandler={passwordHandler} placeHolder={'password*'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Register'} btnTxtClr={'white'} />
                {error && <ErrorStyled>Something went wrong</ErrorStyled>}
            </RegisterContent>
        </RegisterWrapper>
    );
}

export default Register;
