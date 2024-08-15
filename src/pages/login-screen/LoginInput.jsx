import "./LoginInput.scss"
import { Button, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PATH_URL, USER_INFO_DUM, userInfoDefault } from "../../utils/constant";


const LoginInput = () => {
    const [userInfo, setUserInfo] = useState(userInfoDefault)

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();


    const validateEmail = (value) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(String(value).toLowerCase())
    };

    // const validateEmail = (value) => {
    //     if (value === "") return true; // 空の入力を許可
    //     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //     return re.test(String(value).toLowerCase())
    // };


    // useEffect(() => {
    //     if(email ==="") {
    //         setEmailError("")
    //     }
    // },[email])

    // useEffect(() => {
    //     if(password ==="") {
    //         setPasswordError("")
    //     }
    // },[password])

    // const signIn = (e) => {
    //     e.preventDefault();
    //     if(!validateEmail(email)) {
    //         setEmailError("Invalid email address.")
    //     } else {
    //         setEmailError("")
    //     }
    // }


    // const signIn = (e) => {
    //     e.preventDefault();
    //     let isValid = true;

    //     if(!validateEmail(email)) {
    //         setEmailError("Invalid email address")
    //         isValid = false;
    //     } else {
    //         setEmailError("")
    //     }

    //     if(password.length < 8) {
    //         setPasswordError("Password is different. ")
    //         isValid = false;
    //     } else {
    //         setPasswordError("")
    //     }

    //     if(isValid) {
    //         if(email === USER_INFO_DUM.email && password === USER_INFO_DUM.Password) {
    //             navigate("/chat");
    //         } else {
    //             setEmailError("Invalid email or password.")
    //             setPasswordError("Invalid email or password.")
    //         }
    //     }
    // };


    function handleSignIn() {
        
        console.log('handleSignIn', userInfo);

        // emailError
        if (userInfo.email != validateEmail ) {
            setUserInfo(prev=> ({...prev, emailError: "email is different. "}))
        }else{
            setUserInfo(prev=> ({...prev, emailError: ""}))
        }

    
        // passwordError
        if (userInfo.password.length < 8) {
            setUserInfo(prev=> ({...prev, passwordError: "Password is different. "}))
        }else{
            setUserInfo(prev=> ({...prev, passwordError: ""}))
        }

        if(userInfo.email === USER_INFO_DUM.email 
            && userInfo.password === USER_INFO_DUM.Password
        ) {

            localStorage.setItem('token', USER_INFO_DUM.token)
            navigate(`/${PATH_URL.chatPage}`);

        } else {
            alert('Invalid email or password.')
            return
        }
    }

    // function onChange(event) {

    //     const value = event.target.value
    //     const type = event.target.name

    //     console.log('onChange', {type:type, value: value });

    //     if(type === 'emailLogin'){
    //         setUserInfo(prev=> ({...prev, email: value}))
    //     }

    //     if(type === 'passwordLogin'){
    //         setUserInfo(prev=> ({...prev, password: value}))
    //     }
        
    // }

    function onChange(event) {
        const value = event.target.value
        const type = event.target.name
    
        console.log('onChange', {type: type, value: value});
    
        if (type === 'emailLogin') {
            setUserInfo(prev => ({
                ...prev, 
                email: value,
                emailError: value === "" ? "" : prev.emailError // エラーメッセージをクリア
            }))
        } else if (type === 'passwordLogin') {
            setUserInfo(prev => ({
                ...prev, 
                password: value,
                passwordError: value === "" ? "" : prev.passwordError // エラーメッセージをクリア
            }))
        }
    }

    const createAccount = () => {
        console.log("create new Account")
    }

    const forgetLink = () => {
        console.log("reset the Password")
    }

    return (
        <div className="loginFrame">
            <form className="inputContainer" onSubmit={handleSignIn}>

                <div className="EmailLogin" >
                    <TextField
                        type="text"
                        placeholder="Email or phone number"
                        value={userInfo.email}
                        onChange={onChange}
                        error={userInfo.emailError}
                        helperText= {userInfo.emailError}
                        name={'emailLogin'}
                        fullWidth
                    />
                </div>
            
                <div className="Password">
                    <TextField 
                        type="password"
                        placeholder="password"
                        name={'passwordLogin'}
                        value={userInfo.password}
                        onChange={onChange}
                        error={userInfo.passwordError}
                        helperText= {userInfo.passwordError}
                        fullWidth
                        />
                </div>
            </form>

            <Button className="loginButton" onClick = {handleSignIn}> Login </Button>
            <Button className="forgetLink" onClick={forgetLink}>Forget Password</Button>
            <Button className="Account" onClick = {createAccount}> Create new account </Button> 
        </div>
    );


};


export default LoginInput





    // <form action="#">
    //         <input placeholder="Email or phone number" required />
    //         <button type="submit"className="login">
    // </form>