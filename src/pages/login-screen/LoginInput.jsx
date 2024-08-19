import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { loginSuccess, setUserInfo } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../utils/constant';

import { login } from '../../API/onPost';
import './LoginInput.scss';

const LoginInput = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.auth.userInfo);

    const validateEmail = (value) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(value).toLowerCase());
};

    async function handleSignIn(e) {
    e.preventDefault();
    let isValid = true;

    if (isValid) {
        try {
        const response = await login(userInfo.email, userInfo.password);
        dispatch(loginSuccess({ token: response.token }));
        navigate(`/${PATH_URL.chatPage}`);
        } catch (error) {
        alert(error.message || 'Login failed');
        }
    }
}

    function onChange(event) {
    const { name, value } = event.target;
    dispatch(setUserInfo({ ...userInfo, [name]: value, [`${name}Error`]: '' }));
}

    const createAccount = () => {
    console.log("create new Account");
};

    const forgetLink = () => {
    console.log("reset the Password");
};

    return (
    <div className="loginFrame">
        <form className="inputContainer" onSubmit={handleSignIn}>
        <div className="EmailLogin">
            <TextField
            type="text"
            placeholder="Email or phone number"
            value={userInfo.email}
            onChange={onChange}
            error={Boolean(userInfo.emailError)}
            helperText={userInfo.emailError}
            name="email"
            fullWidth
            />
        </div>
        <div className="Password">
            <TextField
            type="password"
            placeholder="password"
            name="password"
            value={userInfo.password}
            onChange={onChange}
            error={Boolean(userInfo.passwordError)}
            helperText={userInfo.passwordError}
            fullWidth
        />
        </div>
    </form>
    <Button onClick={handleSignIn} className="loginButton">Login</Button>
    <Button className="forgetLink" onClick={forgetLink}>Forget Password</Button>
    <Button className="Account" onClick={createAccount}>Create new account</Button>
    </div>
);
};

export default LoginInput;





