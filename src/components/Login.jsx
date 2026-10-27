import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg"
          alt="Netflix Background"
          className="w-full h-screen object-cover"
        />
      </div>
      <form className="absolute top-1/2 w-3/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-70 p-8 rounded-md">
        <h1 className="text-3xl font-bold  m-2 mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 bg-gray-600 m-2 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="border p-2 bg-gray-600 m-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 bg-gray-600 m-2 w-full"
        />
        <button
          type="submit"
          className="bg-red-600 text-white p-2 m-2 w-full rounded-md"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="text-gray-400 m-2 p-2 cursor-pointer"
          onClick={toggleSignUp}
        >
          {!isSignUp
            ? "Already have an account? Sign in now"
            : "New to Netflix? Sign up now"}
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
