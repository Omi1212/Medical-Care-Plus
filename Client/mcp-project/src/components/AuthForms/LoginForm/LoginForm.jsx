import classes from "./LoginForm.module.scss";
import { useAsyncError, useNavigate } from "react-router-dom";
import React,{useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
// import { google } from "googleapis";
// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';

const CLIENT_ID = "571913446838-bk53bucgbqegq0glp266gfsqgo8gao1f.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/calendar";

const LoginForm = () => {
  const navigate = useNavigate();
  //let tokenClient;
  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    //console.log(tokenClient);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    navigate("/auth/dashboard");
  }

  function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      navigate("/auth/signup");
    }
  }

  useEffect(() => {
    /* global google */
    const google = window.google;
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallbackResponse
    });

    // tokenClient = google.accounts.oauth2.initTokenClient({
    //   client_id: CLIENT_ID,
    //   scope: SCOPES,
    //   callback: '', // defined later
    // });

    google.accounts.id.renderButton(
      document.getElementById("signIn"),{
        theme: "outline", 
        width: "250px"
      });

  }, []);
  

  return (
    <div className={classes["container"]}>
      <div className={classes["overlay"]} />
      <div className={classes["container-form"]}>
        <form>
          <div className={classes["back-home"]}>
            <a onClick={() => navigate("/")}>
              <i className="fi fi-rr-arrow-small-left"></i>
            </a>
          </div>
          <div className={classes["right-form"]}>
            <h1>Login on website</h1>
            <p>
              Already a member? Sign in to continue taking care of your health
            </p>
            <div className={classes["input-form"]}>
              <input type="text" placeholder="Email..." />
              <input type="password" placeholder="Password..." />
              <label>
                <input type="checkbox" /> Remember me on this site?
              </label>
              <button>Sign in</button>
              <div id="signIn"></div>
            </div>
          </div>
          <div className={classes["left-form"]}>
            <h1>Not a member yet</h1>
            <p>
              Still not joining us? Don't worry, click here to join the family
            </p>
            <button onClick={handleSignoutClick}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
