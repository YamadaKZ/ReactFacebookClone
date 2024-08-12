import "./LoginInput.scss"
import { Button } from "@mui/material"

const LoginInput = () => {


    const signIn = () => {

    }

    const createAccount = () => {

    }

    const forgetLink = () => {

    }



    return (
        <div className="loginFrame">
            <div className="EmailLogin">
                < input type="text" placeholder="Email or phone number"/>
            </div>
            <div className="Password">
                < input type="text" placeholder="Password"/>
            </div>
            <Button className="loginButton" onClick = {signIn}> Login </Button>
            <Button className="forgetLink" onClick={forgetLink}>Forget Password</Button>
            <Button className="Account" onClick = {createAccount}> Create new account </Button> 
        </div>
    );
}


export default LoginInput