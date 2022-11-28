import classes from "./RegisterForm.module.scss";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <div className={classes["container"]}>
      <div className={classes["right-container"]}>
        <div className={classes["overlay"]}></div>
        <div className={classes["title"]}>
          {/* <h1>Medical Care Plus</h1> */}
        </div>
      </div>
      <div className={classes["left-container"]}>
        <div className={classes["back-home"]}>
          <a onClick={() => navigate("/")}>
            <i className="fi fi-rr-arrow-small-left"></i>
          </a>
        </div>
        <form>
          <h1>Create account</h1>
          <div className={classes["input-form"]}>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <div className={classes["input-password"]}>
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Confirm password" />
            </div>
            <div className={classes["btn-confirm"]}>
              <button className={classes["btn-signup"]}>Sign up</button>
              <button onClick={() => navigate("/auth/signin")} className={classes["btn-signin"]}>Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
