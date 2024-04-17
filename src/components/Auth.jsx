import { useState } from "react";
import classes from "./Auth.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authenticationSlice/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleLogin = () => {
    dispatch(login());
    console.log("Login is successful!");
  };

  //disable the login button under these circumstances: // In other names : Basic Validity

  //NOTE : add regex ;)
  const validEmail = userEmail.length > 0 && userEmail.includes("@");
  const validPassword = userPw.length >= 8;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    if (validEmail && validPassword) {
      setIsBtnDisabled(false);
    } else setIsBtnDisabled(true);
  }, [validEmail, validPassword]);

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
          </div>
          <button className={isBtnDisabled ? "btn-disabled" : "btn"}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
