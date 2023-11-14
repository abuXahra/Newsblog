import React, { useContext, useState } from 'react';
import { LoginContent, LoginWrapper, RegisterConst } from './login.style';
import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import axios from 'axios'
import { ErrorStyled } from '../register/Register.style';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../url';
import { UserContext } from '../../components/context/UserContext';
import Loader from '../../components/loader/Loader';

// 3:7:3

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [regMes, setRegMes] = useState(false)
    const [inputName, setInputName] = useState('')
    const { setUser } = useContext(UserContext) // user context
    const nagivate = useNavigate()
    const [loader, setLoader] = useState(false)



    const passwordHandler = (e) => {
        setPassword(e.target.value);

    }

    const emailHandler = (e) => {
        setEmail(e.target.value);

    }

    const loginHandler = async (e) => {
        e.preventDefault();
        if (email === null || email === "") {
            setRegMes(true)
            setInputName('Email required')
        } else if (password === null || password === "") {
            setRegMes(true)
            setInputName('Password required')
        } else {
            setRegMes(false)

            setLoader(true)
            try {
                const res = await axios.post(URL + '/api/auth/login', { email, password }, { withCredentials: true })
                console.log(res.status + " \nLOGIN DATA:\n" + res.data + " Login successful")
                console.log(res.status)
                setUser(res.data)
                setLoader(false)
                nagivate('/')
                // setEmail('');
                // setPassword('');

            } catch (err) {
                setError(true)
                setLoader(false)
                console.log(err)
            }

        }

    }


    return (
        <LoginWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Register'} linkUrl={'/register'} /></RegisterConst>
            {loader ? <Loader /> : <LoginContent onClick={loginHandler}>
                <h2>Login</h2>
                <Input inputType={'email'} inputValue={email} onchangeHandler={emailHandler} placeHolder={'email'} />
                <Input inputType={'password'} inputValue={password} onchangeHandler={passwordHandler} placeHolder={'password'} />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Login'} btnTxtClr={'white'} />
                {regMes && <ErrorStyled>{inputName}</ErrorStyled>}
                {error && <ErrorStyled>Something went wrong</ErrorStyled>}
                <Links linkColor="none" linkText={'Forgotten your Password? Reset it here'} linkUrl={'/reset'} linkPd={"0"} />
            </LoginContent>
            }
        </LoginWrapper>
    );
}

export default Login;
