import "./LoginInput.scss"
import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

const LoginInput = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")

    const validateEmail = () => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(String(email).toLowerCase)
    };


    const signIn = (e) => {
        e.preventDefault();
        if(!validateEmail(email)) {
            setEmailError("Invalid email address.")
        } else {
            setEmailError("")
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

            <form className="EmailLogin" onSubmit={signIn}>
                <TextField
                type="text"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText= {emailError}
                fullWidth/>
                {/* < input type="text" placeholder="Email or phone number"/> */}
            </form>

            <form className="Password">
                <TextField 
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
                fullWidth/>
                {/* < input type="text" placeholder="Password" required/> */}
            </form>
            
            <Button className="loginButton" onClick = {signIn}> Login </Button>
            <Button className="forgetLink" onClick={forgetLink}>Forget Password</Button>
            <Button className="Account" onClick = {createAccount}> Create new account </Button> 
        </div>
    );


    // <form action="#">
    //         <input placeholder="Email or phone number" required />
    //         <button type="submit"className="login">
    // </form>

}


export default LoginInput