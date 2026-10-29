import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);
    const { message } = checkValidData(
      isSignUp ? name.current.value : null,
      email.current.value,
      password.current.value,
      isSignUp,
    );

    setErrorMessage(message);
    if (message) return;
    if (isSignUp) {
      // Handle sign-up logic here
      console.log("Signing up...");

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  email: email,
                  uid: uid,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          console.log("User signed up:", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      // Handle sign-in logic here
      console.log("Signing in...");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 w-3/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-70 p-8 rounded-md"
      >
        <h1 className="text-3xl font-bold  m-2 mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="border p-2 bg-gray-600 m-2 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="border p-2 bg-gray-600 m-2 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border p-2 bg-gray-600 m-2 w-full"
        />
        <p className="text-red-500 font-bold p-1 m-2">{errorMessage}</p>

        <button
          type="submit"
          className="bg-red-600 text-white p-2 cursor-pointer m-2 w-full rounded-md"
          onClick={handleSubmit}
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
