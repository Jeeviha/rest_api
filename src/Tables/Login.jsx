import React from 'react'
import './Login.css';

const Login = () => {

  return (
    <div class="entire">
        <div>
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png?f=webp' alt="signin" width="400px" height="400px" class="loginimg"/></div>
        <div><fieldset>
                <h3>Welcome Back!</h3><br></br>
                <label class="labels">Username:</label><br></br>
                <input type="text" id="user" name="user" placeholder="User Name" class="textbox"/><br></br><br></br>
                <label class="labels">Password:</label><br></br>
                <input type="password" id="pwd" name="pwd" placeholder="Password" maxlength="8" class="textbox"/><br></br>
                <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop" class="fp">Forgot Password?</a><br></br><br></br>
                <button class="b1" type="button">Login</button><br></br>
                <center><a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Sign Up</a></center>
        </fieldset></div>
    </div>
  )
}

export default Login
