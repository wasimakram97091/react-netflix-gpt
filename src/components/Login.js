import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidate(name, email, password);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bg"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="text-white w-3/12 p-10 bg-black my-36 mx-auto absolute right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="text-3xl font-bold py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-md bg-gray-700 outline-none" />}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full rounded-md bg-gray-700 outline-none" />
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full rounded-md bg-gray-700 outline-none" />
        <p className="text-red-600 font-semibold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-800 w-full rounded-md" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-500">
          {isSignInForm ? (
            <>
              New to Netflix?
              <span className="cursor-pointer text-white font-semibold" onClick={toggleSignInHandler}>
                Sign up now
              </span>
            </>
          ) : (
            <>
              Already registered?
              <span className="cursor-pointer text-white font-semibold" onClick={toggleSignInHandler}>
                Sign In now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
