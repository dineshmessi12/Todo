import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

const Login = () => {
    const [username, setUsername] = useState("user");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authcontext = useAuth();
  
    function handleUserName(event) {
      setUsername(event.target.value);
    }
  
    function handlePassword(event) {
      setPassword(event.target.value);
    }

    async function handleSubmit (){
      const isLoggedIn= await authcontext.loginPage(username,password)

      if (isLoggedIn){
        navigate(`/welcome/${username}`)
      }
      else{
        console.log("failed ")
        setErrorMessage(true)
      }
    }
  

    //   function Success() {
    //     if (successMessage) {
    //       return (
    //         <div className="SuccessMessage">Authentication Successful</div>
    //       );
    //     }
    //     return null;
    //   }
  
    //   function Error() {
    //     if (errorMessage) {
    //       return (
    //         <div className="ErrorMessage">
    //           Authentication Failed, please check your credentials
    //         </div>
    //       );
    //     }
    //     return null;
    //   }
  
    return (
      <div className="login">
        {/* <Success />
        {successMessage && (
          <div className="SuccessMessage">Authentication Successful</div>
        )} */}
        {errorMessage && (
          <div className="ErrorMessage">
            Authentication Failed, please check your credentials
          </div>
        )}
        {/* <Error /> */}
        <div className="loginForm">
          <div>
            <h1>Welcome to Login Page</h1>
          </div>
          <div>
            <label>userName</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUserName}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div>
            <button type="button" name="login" onClick={handleSubmit}>
              login
            </button>
          </div>
        </div>
      </div>
    );
}

export default Login