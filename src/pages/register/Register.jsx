import React, { useState } from 'react';
import { ErrorStyled, RegisterConst, RegisterContent, RegisterWrapper } from './Register.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { URL } from '../../url';


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [regMes, setRegMes] = useState(false)
    const [inputName, setInputName] = useState('')
    const [error, setError] = useState(false)
    const nagivate = useNavigate()



    const registerHandler = async (e) => {
        e.preventDefault();

        if (username === null || username === "") {
            setRegMes(true)
            setInputName('Username')
        } else if (email === null || email === "") {
            setRegMes(true)
            setInputName('Email')
        } else if (password === null || password === "") {
            setRegMes(true)
            setInputName('Password')
        } else {
            try {
                const res = await axios.post(URL + '/api/auth/register', {
                    username: username,
                    email: email,
                    password: password
                })
                setError(false)
                res.data && nagivate('/login')

                // res.data && window.location.replace('/login')
                setUsername("");
                setEmail('');
                setPassword('');
            } catch (err) {
                setError(true)
            }

        }


    }


    return (
        <RegisterWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Login'} linkUrl={'/login'} /></RegisterConst>
            <RegisterContent onClick={registerHandler}>
                <h2>Register</h2>
                <Input inputType={'text'} inputValue={username} onchangeHandler={(e) => { setUsername(e.target.value) }} placeHolder={'username*'} />
                <Input inputType={'email'} inputValue={email} onchangeHandler={(e) => { setEmail(e.target.value) }} placeHolder={'email*'} />
                <Input inputType={'password'} inputValue={password} onchangeHandler={(e) => { setPassword(e.target.value) }} placeHolder={'password*'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Register'} btnTxtClr={'white'} />
                {regMes && <ErrorStyled>{inputName} required</ErrorStyled>}
                {error && <ErrorStyled>Something went wrong</ErrorStyled>}
            </RegisterContent>
        </RegisterWrapper>
    );
}

export default Register;
