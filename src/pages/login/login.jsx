import React, { useContext, useState } from 'react';
import { LoginContent, LoginWrapper, RegisterConst } from './login.style';
// import Input from '../../components/input/Input';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import axios from 'axios'
import { ErrorStyled } from '../register/Register.style';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/context/UserContext';
import Loader from '../../components/loader/Loader';
import Input from '../../components/input_2/Input';

// 3:7:3

// login function

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [regMes, setRegMes] = useState(false)
    const [inputName, setInputName] = useState('')
    const { setUser } = useContext(UserContext) // user context
    const nagivate = useNavigate()
    const [loader, setLoader] = useState(false)


    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        if(setter === setEmail){
            setEmailError(false);
        }else if(setter === setPassword){
            setPasswordError(false);
        }
        setError(false);
    }

  

    const loginHandler = async (e) => {
        e.preventDefault();

         // Validation
         if (email.trim() === "") {
            setEmailError(true);
            setInputName('Email required');
            return;
        }
        if (password.trim() === "") {
            setPasswordError(true);
            setInputName('Password required');
            return;
        }
        
        setEmailError(false)
        setPassword(false);
        setLoader(true)

            try {
                const res = await axios.post(
                    process.env.REACT_APP_URL + '/api/auth/login', 
                    { email, password }, { withCredentials: true }
                );
                console.log(res.status + " \nLOGIN DATA:\n" + res.data + " Login successful")
                setUser(res.data);
                nagivate('/');
        

            } catch (err) {
                setError(true)
                setLoader(false)
                console.log(err)
            }finally {
            setLoader(false);
        }

        } 



    return (
        <LoginWrapper>
            <RegisterConst><Links linkColor="#1c6875" linkText={'Register'} linkUrl={'/register'} /></RegisterConst>
            {loader ? <Loader /> : 
            <LoginContent onSubmit={loginHandler}>
                <h2>Login</h2>
                        <Input
                            title={'Email'}
                            label={'Email'}
                            type={'email'}
                            value={email}
                            onChange={handleInputChange(setEmail)}
                            error={emailError}
                            requiredSymbol={'*'}
                          />
                        
                        <Input
                            title={'Password'}
                            label={'Password'}
                            type={'password'}
                            value={password}
                            onChange={handleInputChange(setPassword)}
                            error={passwordError}
                            requiredSymbol={'*'}
                          />
                <Button btnColor={'#1c6875'} btnBorder={"2px solid #1c6875"} btnText={'Login'} btnTxtClr={'white'} />
                {error && <ErrorStyled>Wrong Credential</ErrorStyled>}
                <Links linkColor="none" linkText={'Forgotten your Password? Reset it here'} linkUrl={'/reset'} linkPd={"0"} />
            </LoginContent>
            }
        </LoginWrapper>
    );
}

export default Login;
