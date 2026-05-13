import React, { useEffect, useState } from "react";
import LoginHeader from "../LoginHeader/LoginHeader";
import "./Login.css";
import validate from "../../utils/validation";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [err, setErr] = useState("");

  const handleClick = () => {
    setIsSignUp((prev) => !prev);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        console.log("sdsddddddddddd", user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);
  const signIn = async () => {
    const errorMsg = validate(email, password, confirmPwd, isSignUp);
    setErr(errorMsg);
    if (errorMsg) return;

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name,
        });
        const updatedUser = auth.currentUser;

        dispatch(
          addUser({
            uid: updatedUser.uid,
            email: updatedUser.email,
            displayName: updatedUser.displayName,
          }),
        );

        console.log("Updated user:", auth.currentUser);

        navigate("/browse");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        console.log("Signed in:", userCredential.user);

        navigate("/browse");
      }
    } catch (error) {
      setErr(error.code + " - " + error.message);
    }
  };

  return (
    <div>
      <LoginHeader />
      <div className="login-bg">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_medium.jpg"
          alt="NetFlix Logo"
        />
        <div className="overlay"></div>
        <div className="form">
          {isSignUp ? <h4>Sign Up</h4> : <h4> Sign In</h4>}
          {isSignUp && (
            <input
              type="text"
              className="pwd"
              placeholder=" Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="text"
            className="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp && (
            <input
              type="password"
              className="pwd"
              placeholder=" Confirm Password"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
          )}
          {err && <p className="errmsg">{err}</p>}
          <button className="signin" onClick={signIn}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <button className="signup" onClick={handleClick}>
            {isSignUp ? (
              <>
                Already Registered? <span>Sign In</span>{" "}
              </>
            ) : (
              <>
                New to Netflix? <span>Sign Up</span>{" "}
              </>
            )}
          </button>
          <p className="bot">
            {" "}
            This page is protected by Google reCaPTCHA to ensure you're not a
            bot. <span>Learn More</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
