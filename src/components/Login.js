import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bg"
        />
      </div>
      <form className="text-white w-3/12 p-12 bg-black my-36 mx-auto absolute right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="text-3xl font-bold py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-md bg-gray-700" />}
        <input type="email" placeholder="Email Address" className="p-4 my-4 w-full rounded-md bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full rounded-md bg-gray-700" />
        <button className="p-4 my-6 bg-red-800 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
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
