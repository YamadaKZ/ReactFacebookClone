import "./LoginInput.scss"
import { Button, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const LoginInput = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();



    const validateEmail = () => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(String(email).toLowerCase())
    };

    useEffect(() => {
        if(email ==="") {
            setEmailError("")
        }
    },[email])

    useEffect(() => {
        if(password ==="") {
            setPasswordError("")
        }
    },[password])

    // const signIn = (e) => {
    //     e.preventDefault();
    //     if(!validateEmail(email)) {
    //         setEmailError("Invalid email address.")
    //     } else {
    //         setEmailError("")
    //     }
    // }


    const signIn = (e) => {
        e.preventDefault();
        let isValid = true;

        if(!validateEmail(email)) {
            setEmailError("Invalid email address")
            isValid = false;
        } else {
            setEmailError("")
        }

        if(password.length < 8) {
            setPasswordError("Password is different. ")
            isValid = false;
        } else {
            setPasswordError("")
        }

        if(isValid) {
            if(email === "yamada@rikkeisoft.com" && password === "12345678") {
                navigate("/chat");
            } else {
                setEmailError("Invalid email or password.")
                setPasswordError("Invalid email or password.")
            }
        }
    };


    const createAccount = () => {
        console.log("create new Account")
    }

    const forgetLink = () => {
        console.log("reset the Password")
    }



    return (
        <div className="loginFrame">
            <form className="EmailLogin" onSubmit={signIn}>
                <TextField
                type="text"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText= {emailError}
                fullWidth
                />
            </form>
                {/* < input type="text" placeholder="Email or phone number"/> */}

            <form className="Password">
                <TextField 
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
                error={!!passwordError}
                helperText= {passwordError}
                fullWidth
                />
                {/* < input type="text" placeholder="Password" required/> */}
            </form>
            
            <Button className="loginButton" onClick = {signIn}> Login </Button>
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