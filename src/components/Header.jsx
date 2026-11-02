import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { Netflix_Logo } from "../utils/constants";
import { toggleGptSearchView } from "../redux/slice/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/slice/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.language);
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log("User is signed in:", user);
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        console.log("User is signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };

  return (
    <div className="flex items-center w-full justify-between p-4 bg-linear-to-b from-black to-transparent  absolute z-50  text-white">
      <img src={Netflix_Logo} alt="Netflix Logo" className="h-12" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearchView && (
            <select
              className="bg-black text-white px-4 py-2 p-2 rounded-md cursor-pointer"
              value={language}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer text-white font-semibold hover:bg-blue-600 transition duration-300"
            onClick={handleGptSearch}
          >
            {showGptSearchView ? "Home Page" : "GPT Search"}
          </button>
          <img
            alt="User Avatar"
            src={user?.photoURL}
            className="h-10 w-10 rounded-full"
          />

          <span className="text-white bg-black font-semibold">
            {user?.displayName}
          </span>
          <button
            className="bg-red-600 px-4 py-2 rounded-md cursor-pointer text-white font-semibold hover:bg-red-700 transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
